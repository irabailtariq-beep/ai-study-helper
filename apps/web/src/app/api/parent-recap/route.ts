import { NextResponse } from "next/server";
import { parentRecap } from "@ash/ai-client";
import { supabaseServer } from "@/lib/supabase/server";
import { friendlyError } from "@/lib/apiError";

export const runtime = "nodejs";

export async function GET() {
  const sb = await supabaseServer();
  if (!sb) return NextResponse.json({ error: "Sign in required." }, { status: 400 });
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  // Gather last 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const sinceDay = sevenDaysAgo.toISOString().slice(0, 10);

  const [profileRow, activity, quizzes, chats, attempts] = await Promise.all([
    sb.from("profiles").select("*").eq("id", user.id).maybeSingle(),
    sb.from("activity").select("*").eq("user_id", user.id).gte("day", sinceDay),
    sb.from("quizzes").select("title, created_at").eq("user_id", user.id).gte("created_at", sevenDaysAgo.toISOString()),
    sb.from("chat_messages").select("content, created_at").eq("user_id", user.id).eq("role", "user").gte("created_at", sevenDaysAgo.toISOString()).limit(50),
    sb.from("quiz_attempts").select("score, total, created_at").eq("user_id", user.id).gte("created_at", sevenDaysAgo.toISOString()),
  ]);

  const totals = (activity.data ?? []).reduce(
    (acc, d: any) => ({
      explains: acc.explains + (d.explains || 0),
      quizzes: acc.quizzes + (d.quizzes || 0),
      chats: acc.chats + (d.chats || 0),
      cards: acc.cards + (d.cards_reviewed || 0),
      days: acc.days + 1,
    }),
    { explains: 0, quizzes: 0, chats: 0, cards: 0, days: 0 }
  );

  const stats = {
    profile: profileRow.data,
    totals,
    quizzesMade: (quizzes.data ?? []).map((q: any) => q.title),
    recentQuestions: (chats.data ?? []).slice(-10).map((c: any) => c.content),
    attempts: attempts.data ?? [],
  };

  // Fall back profile for prompt
  const profile = profileRow.data ?? {
    country: "PK",
    age: 14,
    grade: "Class 9",
    curriculum: "pk-federal",
  };

  let letter = "Not enough recent activity to write a full recap yet. Encourage your child to use the app for a few days and check back!";
  if (totals.days > 0) {
    try {
      letter = await parentRecap({ profile: profile as any, stats });
    } catch (e: any) {
      // never put a provider error inside a letter shown to a parent
      letter = "(The recap could not be generated just now. Please try again shortly.)";
    }
  }

  return NextResponse.json({ stats, letter });
}
