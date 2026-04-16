import { NextRequest, NextResponse } from "next/server";
import { chat } from "@ash/ai-client";
import { checkRateLimit, keyFromRequest } from "@/lib/rateLimit";
import { supabaseServer } from "@/lib/supabase/server";
import { recordActivity } from "@/lib/activity";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(req: NextRequest) {
  const rl = checkRateLimit(`chat:${keyFromRequest(req)}`, Number(process.env.RL_GUEST_PER_DAY ?? 10) * 5);
  if (!rl.allowed) return NextResponse.json({ error: "Daily limit reached." }, { status: 429 });

  try {
    const body = await req.json();
    if (!body?.profile) return NextResponse.json({ error: "Missing profile" }, { status: 400 });

    const sb = await supabaseServer();
    const { data: userData } = sb ? await sb.auth.getUser() : { data: { user: null } };
    const user = userData?.user;

    let memory: string | undefined = body.memory;
    let sessionId: string | null = body.sessionId ?? null;
    const answerLength = body.answerLength;

    // If signed in and a sessionId provided, pull the session's rolling summary
    if (sb && user && sessionId) {
      const { data: sess } = await sb
        .from("chat_sessions")
        .select("summary")
        .eq("id", sessionId)
        .eq("user_id", user.id)
        .maybeSingle();
      if (sess?.summary) memory = sess.summary;
    }

    const reply = await chat({ profile: body.profile, history: body.history, memory, answerLength });

    // Persist messages if user is authenticated
    if (sb && user) {
      if (!sessionId) {
        const { data: newSess } = await sb
          .from("chat_sessions")
          .insert({ user_id: user.id, title: body.profile.grade + " tutor" })
          .select()
          .single();
        sessionId = newSess?.id ?? null;
      }
      if (sessionId) {
        const last = body.history[body.history.length - 1];
        await sb.from("chat_messages").insert([
          { session_id: sessionId, user_id: user.id, role: last.role, content: last.content },
          { session_id: sessionId, user_id: user.id, role: "assistant", content: reply },
        ]);
        // Every 10 messages, asynchronously update the rolling summary
        const { count } = await sb
          .from("chat_messages")
          .select("*", { count: "exact", head: true })
          .eq("session_id", sessionId);
        if ((count ?? 0) % 10 === 0) {
          const { data: msgs } = await sb
            .from("chat_messages")
            .select("role,content")
            .eq("session_id", sessionId)
            .order("created_at", { ascending: true });
          const joined = (msgs ?? []).map((m: any) => `${m.role}: ${m.content}`).join("\n");
          const summary = `Previously: ${joined.slice(-1500)}`;
          await sb.from("chat_sessions").update({ summary }).eq("id", sessionId);
        }
      }
      recordActivity(user.id, "chats").catch(() => {});
    }

    return NextResponse.json({ reply, sessionId });
  } catch (e: any) {
    console.error("/api/chat", e);
    return NextResponse.json({ error: e?.message ?? "Chat failed" }, { status: 500 });
  }
}
