import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";
export const maxDuration = 60;

// Moodle REST via token.
// POST: { baseUrl: "https://moodle.school.edu", token: "..." }
export async function POST(req: NextRequest) {
  try {
    const { baseUrl, token } = await req.json();
    if (!baseUrl || !token) return NextResponse.json({ error: "Need baseUrl + token" }, { status: 400 });

    const q = (wsfn: string, extra = "") =>
      `${baseUrl}/webservice/rest/server.php?wstoken=${token}&wsfunction=${wsfn}&moodlewsrestformat=json${extra}`;

    // Who am I?
    const meR = await fetch(q("core_webservice_get_site_info"));
    if (!meR.ok) return NextResponse.json({ error: "Moodle token invalid" }, { status: 400 });
    const me = (await meR.json()) as { userid: number; fullname: string };

    const coursesR = await fetch(q("core_enrol_get_users_courses", `&userid=${me.userid}`));
    const courses = (await coursesR.json()) as { id: number; fullname: string }[];

    const perCourse = await Promise.all(
      courses.slice(0, 8).map(async (c) => {
        const asgR = await fetch(q("mod_assign_get_assignments", `&courseids[0]=${c.id}`));
        const asgD = (await asgR.json()) as any;
        const assignments = (asgD?.courses?.[0]?.assignments ?? []).map((a: any) => ({
          id: a.id,
          name: a.name,
          duedate: a.duedate,
          grade: a.grade,
          allowsubmissionsfromdate: a.allowsubmissionsfromdate,
        }));
        return { course: { id: c.id, name: c.fullname }, assignments };
      })
    );

    let summary = "";
    if (process.env.GEMINI_API_KEY) {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const r = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ role: "user", parts: [{ text: JSON.stringify(perCourse) }] }],
        config: {
          systemInstruction: `Study coach: summarize overdue, due-soon, next steps. Plain text, under 200 words.`,
          temperature: 0.3,
        },
      });
      summary = r.text ?? "";
    }

    return NextResponse.json({ user: me.fullname, courses: perCourse, summary });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Failed" }, { status: 500 });
  }
}
