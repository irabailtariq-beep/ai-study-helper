import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { listCourses, listCourseWork, listSubmissions, refreshToken } from "@/lib/classroom";
import { GoogleGenAI } from "@google/genai";

// DISABLED 2026-09-04. This Google Classroom integration is not linked from any
// page, is not mentioned anywhere in the privacy policy, and stores Google
// access and refresh tokens for students aged 13+. An undisclosed OAuth
// integration holding minors' credentials is a liability, not a feature.
// The code is intact: set CLASSROOM_ENABLED=1 to turn it back on, after adding
// it to the privacy policy and linking it from the UI.
const CLASSROOM_ENABLED = process.env.CLASSROOM_ENABLED === "1";
const classroomDisabled = () =>
  NextResponse.json(
    { error: "The Google Classroom connection is not available." },
    { status: 404 },
  );


export const runtime = "nodejs";
export const maxDuration = 60;

async function getToken(userId: string) {
  const sb = await supabaseServer();
  if (!sb) return null;
  const { data: link } = await sb.from("classroom_links").select("*").eq("user_id", userId).eq("provider", "google").maybeSingle();
  if (!link) return null;
  // Refresh if close to expiry
  const expires = link.expires_at ? new Date(link.expires_at).getTime() : 0;
  if (expires - 60_000 < Date.now() && link.refresh_token) {
    try {
      const t = await refreshToken(link.refresh_token);
      const new_expires = new Date(Date.now() + t.expires_in * 1000).toISOString();
      await sb.from("classroom_links").update({ access_token: t.access_token, expires_at: new_expires }).eq("user_id", userId).eq("provider", "google");
      return t.access_token;
    } catch {
      return null;
    }
  }
  return link.access_token as string;
}

export async function GET() {
  if (!CLASSROOM_ENABLED) return classroomDisabled();
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Sign in required." }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Sign in first." }, { status: 401 });

  const token = await getToken(user.id);
  if (!token) return NextResponse.json({ connected: false });

  try {
    const courses = await listCourses(token);
    const perCourse = await Promise.all(
      courses.slice(0, 8).map(async (c) => {
        const work = await listCourseWork(c.id, token);
        const slim = await Promise.all(
          work.slice(0, 20).map(async (w) => {
            const subs = await listSubmissions(c.id, w.id, token).catch(() => []);
            const mine = subs[0];
            return {
              id: w.id,
              title: w.title,
              dueDate: w.dueDate,
              state: mine?.state ?? "NEW",
              late: mine?.late ?? false,
              grade: mine?.assignedGrade ?? null,
              max: w.maxPoints ?? null,
            };
          })
        );
        return { course: c, work: slim };
      })
    );

    // Ask Gemini to summarize
    const key = process.env.GEMINI_API_KEY;
    let aiSummary = "";
    if (key) {
      const ai = new GoogleGenAI({ apiKey: key });
      const payload = JSON.stringify(perCourse, null, 2);
      const r = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ role: "user", parts: [{ text: payload }] }],
        config: {
          systemInstruction: `You are a study coach. Given a JSON list of Google Classroom courses and assignments, produce a short, kind summary for the student:

- What's overdue (be gentle, practical).
- What's due in the next 3 days.
- 1-3 concrete "work on this next" suggestions.
- Overall grade snapshot if grades are present.

Format as plain text, under 200 words. No JSON.`,
          temperature: 0.4,
        },
      });
      aiSummary = r.text ?? "";
    }

    return NextResponse.json({ connected: true, courses: perCourse, aiSummary });
  } catch (e: any) {
    console.error("/api/classroom/summary", e);
    return NextResponse.json({ error: e?.message ?? "Failed" }, { status: 500 });
  }
}
