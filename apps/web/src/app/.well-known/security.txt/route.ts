// security.txt — RFC 9116 — for security researchers to report vulnerabilities.
// https://securitytxt.org
// Returned as plain text at /.well-known/security.txt

export const dynamic = "force-static";

export function GET() {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  const body = `Contact: mailto:security@ai-study-helper.app
Expires: ${expires.toISOString()}
Preferred-Languages: en
Canonical: https://ai-study-helper-khaki.vercel.app/.well-known/security.txt
Policy: https://ai-study-helper-khaki.vercel.app/privacy
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
