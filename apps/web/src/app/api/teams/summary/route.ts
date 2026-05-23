import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import { listClasses, listAssignments, refreshToken } from "@/lib/teams";
import { GoogleGenAI } from "@google/genai";

export const runtime = "nodejs";
export const maxDuration = 60;

async function getToken(userId: string) {
  const sb = await supabaseServer();
  if (!sb) return null;
  const { data: link } = await sb.from("classroom_links").select("*").eq("user_id", userId).eq("provider", "microsoft").maybeSingle();
  if (!link) return null;
  const expires = link.expires_at ? new Date(link.expires_at).getTime() : 0;
  if (expires - 60_000 < Date.now() && link.refresh_token) {
    try {
      const t = await refreshToken(link.refresh_token);
      const new_expires = new Date(Date.now() + t.expires_in * 1000).toISOString();
      await sb.from("classroom_links").update({ access_token: t.access_token, expires_at: new_expires }).eq("user_id", userId).eq("provider", "microsoft");
      return t.access_token;
    } catch { return null; }
  }
  return link.access_token as string;
}

export async function GET() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Sign in required" }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Sign in first" }, { status: 401 });

  const token = await getToken(user.id);
  if (!token) return NextResponse.json({ connected: false });

  try {
    const classes = await listClasses(token);
    const perClass = await Promise.all(
      classes.slice(0, 8).map(async (c) => {
        const assignments = await listAssignments(c.id, token).catch(() => []);
        return {
          class: c,
          assignments: assignments.slice(0, 20).map((a) => ({
            id: a.id,
            title: a.displayName,
            status: a.status,
            dueDateTime: a.dueDateTime,
            max: a.grading?.maxPoints ?? null,
          })),
        };
      })
    );

    let aiSummary = "";
    const key = process.env.GEMINI_API_KEY;
    if (key) {
      const ai = new GoogleGenAI({ apiKey: key });
      const r = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [{ role: "user", parts: [{ text: JSON.stringify(perClass, null, 2) }] }],
        config: {
          systemInstruction: `You are a kind study coach. Given a JSON list of Microsoft Teams classes and assignments, produce a short summary for the student: what's overdue, what's due soon, and 1-3 suggestions for what to start next. Plain text, under 200 words.`,
          temperature: 0.4,
        },
      });
      aiSummary = r.text ?? "";
    }

    return NextResponse.json({ connected: true, classes: perClass, aiSummary });
  } catch (e: any) {
    console.error("/api/teams/summary", e);
    return NextResponse.json({ error: e?.message ?? "Failed" }, { status: 500 });
  }
}
