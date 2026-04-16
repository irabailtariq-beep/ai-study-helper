// Simple in-memory rate limiter for local dev. Replace with Redis/Upstash in prod.
type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export function checkRateLimit(key: string, limit: number, windowMs = 24 * 60 * 60 * 1000) {
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

export function keyFromRequest(req: Request) {
  const h = (k: string) => req.headers.get(k) ?? "";
  return h("x-forwarded-for") || h("x-real-ip") || "local";
}
