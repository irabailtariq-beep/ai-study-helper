/**
 * Rate limiting for the AI routes.
 *
 * The in-memory map below is per-lambda: on Vercel every instance keeps its own
 * copy and a cold start wipes it, so on its own it does NOT actually enforce a
 * daily cap in production — one script could drain the Gemini quota and take all
 * ten tools down. When Upstash Redis credentials are present we use a shared
 * counter instead, which is enforced across every instance.
 *
 * To turn it on, set these in Vercel (Upstash has a free tier):
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 * Without them everything still works; the limit is just best-effort.
 */

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

const REDIS_URL = process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
export const rateLimitIsShared = Boolean(REDIS_URL && REDIS_TOKEN);

export type RateLimitResult = { allowed: boolean; remaining: number };

/** Synchronous, per-instance. Kept for local dev and as the fallback. */
export function checkRateLimit(key: string, limit: number, windowMs = 24 * 60 * 60 * 1000): RateLimitResult {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || now > b.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1 };
  }
  if (b.count >= limit) return { allowed: false, remaining: 0 };
  b.count += 1;
  return { allowed: true, remaining: limit - b.count };
}

/**
 * Shared counter when Upstash is configured, otherwise the in-memory fallback.
 * Prefer this in API routes. Fails OPEN — if Redis is unreachable we let the
 * request through rather than breaking the tools for everyone.
 */
export async function checkRateLimitShared(
  key: string,
  limit: number,
  windowSeconds = 24 * 60 * 60,
): Promise<RateLimitResult> {
  if (!rateLimitIsShared) return checkRateLimit(key, limit, windowSeconds * 1000);

  try {
    // INCR then EXPIRE on first hit — one round trip each, both idempotent.
    const incr = await fetch(`${REDIS_URL}/incr/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
      cache: "no-store",
    });
    if (!incr.ok) return { allowed: true, remaining: limit };
    const { result } = (await incr.json()) as { result: number };

    if (result === 1) {
      await fetch(`${REDIS_URL}/expire/${encodeURIComponent(key)}/${windowSeconds}`, {
        headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
        cache: "no-store",
      }).catch(() => {});
    }
    if (result > limit) return { allowed: false, remaining: 0 };
    return { allowed: true, remaining: Math.max(0, limit - result) };
  } catch {
    return { allowed: true, remaining: limit }; // fail open
  }
}

export function keyFromRequest(req: Request) {
  const h = (k: string) => req.headers.get(k) ?? "";
  // x-forwarded-for can be a list; the client IP is the first entry.
  const fwd = h("x-forwarded-for").split(",")[0].trim();
  return fwd || h("x-real-ip") || "local";
}

/**
 * Cheap flood guard: the rate limiter caps how OFTEN a visitor can call the AI,
 * this caps how BIG each call can be. Uses Content-Length so oversized bodies
 * are rejected before we parse or forward anything to the model.
 */
export function bodyTooLarge(req: Request, maxBytes: number): boolean {
  const len = Number(req.headers.get("content-length") ?? 0);
  return Number.isFinite(len) && len > maxBytes;
}
