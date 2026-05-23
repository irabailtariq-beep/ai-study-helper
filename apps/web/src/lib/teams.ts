// Microsoft Graph / Teams Education wrapper.
// Uses EducationAssignments API.
//   https://learn.microsoft.com/en-us/graph/api/resources/educationassignment

const SCOPES = [
  "openid",
  "profile",
  "offline_access",
  "User.Read",
  "EduAssignments.ReadBasic",
  "EduAssignments.ReadSelf",
  "EduRoster.ReadBasic",
  "EduAdministration.Read",
];

export function authUrl(state: string) {
  const cid = process.env.MS_CLIENT_ID;
  const redirect = process.env.MS_REDIRECT_URI;
  const tenant = process.env.MS_TENANT || "common";
  if (!cid || !redirect) throw new Error("MS_CLIENT_ID / MS_REDIRECT_URI not set");
  const u = new URL(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`);
  u.searchParams.set("client_id", cid);
  u.searchParams.set("redirect_uri", redirect);
  u.searchParams.set("response_type", "code");
  u.searchParams.set("response_mode", "query");
  u.searchParams.set("scope", SCOPES.join(" "));
  u.searchParams.set("state", state);
  u.searchParams.set("prompt", "select_account");
  return u.toString();
}

export async function exchangeCode(code: string) {
  const tenant = process.env.MS_TENANT || "common";
  const body = new URLSearchParams({
    code,
    client_id: process.env.MS_CLIENT_ID!,
    client_secret: process.env.MS_CLIENT_SECRET!,
    redirect_uri: process.env.MS_REDIRECT_URI!,
    grant_type: "authorization_code",
    scope: SCOPES.join(" "),
  });
  const r = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!r.ok) throw new Error(`MS token exchange: ${await r.text()}`);
  return (await r.json()) as {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    scope: string;
  };
}

export async function refreshToken(refresh_token: string) {
  const tenant = process.env.MS_TENANT || "common";
  const body = new URLSearchParams({
    refresh_token,
    client_id: process.env.MS_CLIENT_ID!,
    client_secret: process.env.MS_CLIENT_SECRET!,
    grant_type: "refresh_token",
    scope: SCOPES.join(" "),
  });
  const r = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!r.ok) throw new Error(`MS refresh: ${await r.text()}`);
  return (await r.json()) as { access_token: string; expires_in: number };
}

async function g<T>(url: string, token: string): Promise<T> {
  const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!r.ok) throw new Error(`${url} → ${r.status} ${await r.text()}`);
  return (await r.json()) as T;
}

export type MsClass = { id: string; displayName: string; description?: string };
export type MsAssignment = {
  id: string;
  classId: string;
  displayName: string;
  status?: string;
  dueDateTime?: string;
  grading?: { maxPoints?: number };
};

export async function listClasses(token: string) {
  const d = await g<{ value?: MsClass[] }>(
    "https://graph.microsoft.com/v1.0/education/me/classes?$top=50",
    token
  );
  return d.value ?? [];
}

export async function listAssignments(classId: string, token: string) {
  const d = await g<{ value?: MsAssignment[] }>(
    `https://graph.microsoft.com/v1.0/education/classes/${classId}/assignments?$top=50`,
    token
  );
  return d.value ?? [];
}
