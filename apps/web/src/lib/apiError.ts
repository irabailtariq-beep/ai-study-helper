/**
 * Turn a provider exception into something a 15-year-old should see.
 *
 * The 2026-09-01 audit caught the tools returning Google's raw error JSON
 * straight to the page — quota messages, internal metric names, billing links
 * and all. That is confusing for a student, makes a working site look broken,
 * and leaks how the thing is built. Every route the UI calls maps errors through
 * here. The four unlinked legacy routes that also used it — syllabus,
 * concept-map, diagnostic and parent-recap — were deleted on 2026-09-05 along
 * with /api/sessions: nothing in the app had called any of them, and each was a
 * public endpoint drawing on the same free AI quota the ten real tools share.
 * The real error still goes to the server logs for us.
 */
export type FriendlyError = { error: string; status: number };

export function friendlyError(e: unknown): FriendlyError {
  const raw = String((e as { message?: string })?.message ?? e ?? "");

  // Provider is out of quota or rate-limiting us. Emphatically not the
  // student's fault, and it usually clears within hours.
  if (/\b429\b|quota|rate.?limit|RESOURCE_EXHAUSTED|too many requests/i.test(raw)) {
    return {
      error:
        "Our AI has hit its limit for the moment — this is on us, not you. Please try again in a little while.",
      status: 503,
    };
  }

  // Credentials, permissions, or a retired model: broken on our side.
  if (/\b40[134]\b|api.?key|PERMISSION_DENIED|UNAUTHENTICATED|NOT_FOUND|not found for API version|is not supported|no longer available/i.test(raw)) {
    return {
      error: "Something is broken on our side. We have been alerted — please try again later.",
      status: 503,
    };
  }

  // Took too long.
  if (/timeout|timed out|ETIMEDOUT|aborted|ECONNRESET|socket hang up/i.test(raw)) {
    return {
      error:
        "That took too long to answer. Try again, and if it is a long piece of text try a shorter part of it.",
      status: 504,
    };
  }

  // The model returned something we could not parse.
  if (/JSON|unexpected token|SyntaxError/i.test(raw)) {
    return {
      error: "The answer came back in a form we could not read. Please try again.",
      status: 502,
    };
  }

  return {
    error: "Something went wrong. Please try again — if it keeps happening it is our fault, not yours.",
    status: 500,
  };
}
