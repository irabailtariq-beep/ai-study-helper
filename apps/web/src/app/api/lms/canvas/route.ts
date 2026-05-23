import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";
export const maxDuration = 60;

// Canvas LMS connects via a personal access token + institution base URL.
// POST body: { baseUrl: "https://canvas.instructure.com", token: "...", aiSummary?: boolean }
export async function POST(req: NextRequest) {
  try {
    const { baseUrl, token, aiSummary = true } = await req.json();
    if (!baseUrl || !token) return NextResponse.json({ error: "Need baseUrl + token" }, { status: 400 });

    const h = { Authorization: `Bearer ${token}` };
    const courses = await fetch(`${baseUrl}/api/v1/courses?enrollment_state=active&per_page=20`, { headers: h });
    if (!courses.ok) return NextResponse.json({ error: `Canvas ${courses.status}` }, { status: 400 });
    const cs = (await courses.json()) as { id: number; name: string }[];

    const perCourse = await Promise.all(
      cs.slice(0, 8).map(async (c) => {
        const a = await fetch(`${baseUrl}/api/v1/courses/${c.id}/assignments?per_page=30`, { headers: h });
        const list = (await a.json()) as any[];
        return {
          course: { id: c.id, name: c.name },
          assignments: list.slice(0, 30).map((x) => ({
            id: x.id,
            name: x.name,
            due_at: x.due_at,
            points_possible: x.points_possible,
            has_submitted_submissions: x.has_submitted_submissions,
          })),
        };
      })
    );

    let summary = "";
    if (aiSummary && process.env.GEMINI_API_KEY) {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const r = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ role: "user", parts: [{ text: JSON.stringify(perCourse) }] }],
        config: {
          systemInstruction: `You are a study coach. Summarize what's overdue, what's due soon, and 1-3 next actions. Plain text, under 200 words.`,
          temperature: 0.3,
        },
      });
      summary = r.text ?? "";
    }

    return NextResponse.json({ courses: perCourse, summary });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Failed" }, { status: 500 });
  }
}
