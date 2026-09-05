// Lightweight Google Classroom wrapper. Pure fetch — no googleapis dep needed.

const SCOPES = [
  "openid",
  "email",
  "profile",
  "https://www.googleapis.com/auth/classroom.courses.readonly",
  "https://www.googleapis.com/auth/classroom.coursework.me.readonly",
  "https://www.googleapis.com/auth/classroom.rosters.readonly",
  "https://www.googleapis.com/auth/classroom.student-submissions.me.readonly",
];

export function authUrl(state: string) {
  const cid = process.env.GOOGLE_CLIENT_ID;
  const redirect = process.env.GOOGLE_REDIRECT_URI;
  if (!cid || !redirect) throw new Error("GOOGLE_CLIENT_ID / GOOGLE_REDIRECT_URI not set");
  const u = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  u.searchParams.set("client_id", cid);
  u.searchParams.set("redirect_uri", redirect);
  u.searchParams.set("response_type", "code");
  u.searchParams.set("scope", SCOPES.join(" "));
  u.searchParams.set("access_type", "offline");
  u.searchParams.set("prompt", "consent");
  u.searchParams.set("state", state);
  return u.toString();
}

export async function exchangeCode(code: string) {
  const body = new URLSearchParams({
    code,
    client_id: process.env.GOOGLE_CLIENT_ID!,
    client_secret: process.env.GOOGLE_CLIENT_SECRET!,
    redirect_uri: process.env.GOOGLE_REDIRECT_URI!,
    grant_type: "authorization_code",
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`Token exchange failed: ${await res.text()}`);
  return (await res.json()) as {
    access_token: string;
    refresh_token?: string;
    expires_in: number;
    scope: string;
    token_type: string;
  };
}

/**
 * Hand the grant back to Google.
 *
 * Deleting our row does NOT end Google's side of the arrangement: the refresh
 * token keeps working and the student still sees Help in Study listed under
 * their Google account with access to their Classroom data. Until 2026-09-05
 * both "Disconnect" and "Delete my account" only dropped the row, so a student
 * who disconnected stayed connected where it counted.
 *
 * Revoking a refresh token also revokes every access token derived from it.
 * Deliberately never throws: this runs on the path where someone is deleting
 * their account, and that must not fail because Google is having a bad minute.
 * Returns true only on a confirmed revoke, so callers can log the difference.
 */
export async function revokeGoogleToken(token: string): Promise<boolean> {
  if (!token) return false;
  try {
    const res = await fetch("https://oauth2.googleapis.com/revoke", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ token }),
      cache: "no-store",
    });
    // 200 = revoked. 400 usually means it was already invalid, which is the
    // outcome we wanted anyway, so treat it as done rather than retrying.
    return res.ok || res.status === 400;
  } catch {
    return false;
  }
}

export async function refreshToken(refresh_token: string) {
  const body = new URLSearchParams({
    refresh_token,
    client_id: process.env.GOOGLE_CLIENT_ID!,
    client_secret: process.env.GOOGLE_CLIENT_SECRET!,
    grant_type: "refresh_token",
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`Refresh failed: ${await res.text()}`);
  return (await res.json()) as { access_token: string; expires_in: number };
}

async function gfetch<T>(url: string, token: string): Promise<T> {
  const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!r.ok) throw new Error(`${url} → ${r.status} ${await r.text()}`);
  return (await r.json()) as T;
}

export type ClassroomCourse = {
  id: string;
  name: string;
  section?: string;
  courseState?: string;
};

export type ClassroomWork = {
  id: string;
  courseId: string;
  title: string;
  description?: string;
  maxPoints?: number;
  dueDate?: { year: number; month: number; day: number };
  dueTime?: { hours?: number; minutes?: number };
  workType?: string;
  state?: string;
};

export type ClassroomSubmission = {
  id: string;
  courseWorkId: string;
  courseId: string;
  state: string; // NEW, CREATED, TURNED_IN, RETURNED, RECLAIMED_BY_STUDENT
  late?: boolean;
  assignedGrade?: number;
  draftGrade?: number;
};

export async function listCourses(token: string) {
  const d = await gfetch<{ courses?: ClassroomCourse[] }>(
    "https://classroom.googleapis.com/v1/courses?courseStates=ACTIVE&pageSize=50",
    token
  );
  return d.courses ?? [];
}

export async function listCourseWork(courseId: string, token: string) {
  const d = await gfetch<{ courseWork?: ClassroomWork[] }>(
    `https://classroom.googleapis.com/v1/courses/${courseId}/courseWork?pageSize=50`,
    token
  );
  return d.courseWork ?? [];
}

export async function listSubmissions(courseId: string, workId: string, token: string) {
  const d = await gfetch<{ studentSubmissions?: ClassroomSubmission[] }>(
    `https://classroom.googleapis.com/v1/courses/${courseId}/courseWork/${workId}/studentSubmissions?userId=me`,
    token
  );
  return d.studentSubmissions ?? [];
}
