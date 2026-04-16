import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";

export async function GET() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Auth not configured" }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const [profile, sessions, messages, quizzes, attempts, cards, activity] = await Promise.all([
    sb.from("profiles").select("*").eq("id", user.id),
    sb.from("chat_sessions").select("*").eq("user_id", user.id),
    sb.from("chat_messages").select("*").eq("user_id", user.id),
    sb.from("quizzes").select("*").eq("user_id", user.id),
    sb.from("quiz_attempts").select("*").eq("user_id", user.id),
    sb.from("flashcards").select("*").eq("user_id", user.id),
    sb.from("activity").select("*").eq("user_id", user.id),
  ]);

  const payload = {
    exportedAt: new Date().toISOString(),
    user: { id: user.id, email: user.email },
    profile: profile.data,
    sessions: sessions.data,
    messages: messages.data,
    quizzes: quizzes.data,
    attempts: attempts.data,
    flashcards: cards.data,
    activity: activity.data,
  };

  return new NextResponse(JSON.stringify(payload, null, 2), {
    headers: {
      "content-type": "application/json",
      "content-disposition": `attachment; filename="ai-study-helper-export-${Date.now()}.json"`,
    },
  });
}
