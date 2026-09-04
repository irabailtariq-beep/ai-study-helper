"use client";
import { useEffect, useRef, useState } from "react";
import { useEffectiveProfile } from "@/lib/profileStore";
import { ProfileNudge } from "@/components/ProfileNudge";
import type { ChatTurn } from "@ash/core";
import Link from "next/link";
import { VoiceInput, SpeakButton } from "@/components/VoiceInput";
import { RichOutput } from "@/components/RichOutput";

const MEMORY_KEY = "ash-chat-history";

export default function ChatPage() {
  const profile = useEffectiveProfile();
  const [history, setHistory] = useState<ChatTurn[]>([]);
  const [input, setInput] = useState("");
  const [answerLength, setAnswerLength] = useState<"short" | "long">("long");
  const [loading, setLoading] = useState(false);
  // Errors are NOT conversation. Writing them into `history` meant the student's
  // saved chat filled up with fake tutor turns that were persisted, replayed to
  // the model as if the tutor had said them, and offered a "Listen" button.
  const [sendError, setSendError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(MEMORY_KEY);
      if (raw) setHistory(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(MEMORY_KEY, JSON.stringify(history));
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);


  async function send() {
    if (!input.trim() || loading) return;
    const asked = input.trim();
    const newTurn: ChatTurn = { role: "user", content: asked };
    const next = [...history, newTurn];
    setHistory(next);
    setInput("");
    setLoading(true);
    setSendError(null);
    try {
      // Summary memory: last 20 turns verbatim + a short summary of older
      const recent = next.slice(-20);
      const older = next.slice(0, -20);
      const memory = older.length > 0 ? `Earlier we discussed: ${older.map(t => t.content).slice(0, 5).join(" | ")}` : undefined;
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ profile, history: recent, memory, answerLength }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Chat failed");
      setHistory([...next, { role: "assistant", content: data.reply }]);
    } catch (e: any) {
      // Roll the unanswered question back out of the conversation and hand it
      // back to the student so they can simply press send again.
      setHistory(history);
      setInput(asked);
      setSendError(e?.message ?? "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen p-6 max-w-3xl mx-auto flex flex-col">
      <ProfileNudge />
      <Link href="/" className="text-sm" style={{ color: "var(--ash-primary)" }}>← Home</Link>
      <h1 className="text-2xl font-bold my-4">Chat tutor</h1>

      <div className="glass-panel p-4 rounded-ash flex-1 overflow-y-auto min-h-[400px] max-h-[60vh] space-y-3">
        {history.length === 0 && (
          <p className="text-sm" style={{ color: "var(--ash-muted)" }}>
            Ask me anything about your studies. I'll adapt to your age and class.
          </p>
        )}
        {history.map((t, i) => (
          <div key={i} className={t.role === "user" ? "text-right" : "text-left"}>
            <div
              className="inline-block p-3 rounded-ash max-w-[90%] text-left"
              style={{
                background: t.role === "user" ? "var(--ash-primary)" : "var(--ash-bg)",
                color: t.role === "user" ? "white" : "var(--ash-text)",
              }}
            >
              {t.role === "user"
                ? <span className="whitespace-pre-wrap">{t.content}</span>
                : <RichOutput>{t.content}</RichOutput>}
            </div>
            {t.role === "assistant" && <div className="mt-1"><SpeakButton text={t.content} /></div>}
          </div>
        ))}
        {loading && <div className="text-sm" style={{ color: "var(--ash-muted)" }}>Thinking…</div>}
        {sendError && (
          <div
            role="status"
            className="text-sm rounded-ash p-3"
            style={{ background: "rgba(179,64,47,0.10)", color: "var(--ash-text)", border: "1px solid rgba(179,64,47,0.35)" }}
          >
            {sendError} Your question is back in the box — press send to try again.
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="mt-2">
        <div className="text-sm font-semibold mb-1" style={{ color: "var(--ash-muted)" }}>
          Answer Length
        </div>
        <div className="flex rounded-ash border overflow-hidden">
          <button
            type="button"
            onClick={() => setAnswerLength("short")}
            className="flex-1 py-2 text-sm font-semibold"
            style={{
              background: answerLength === "short" ? "linear-gradient(135deg, var(--ash-accent), #0e9f8e)" : "transparent",
              color: answerLength === "short" ? "white" : "var(--ash-text)",
            }}
          >
            Short
          </button>
          <button
            type="button"
            onClick={() => setAnswerLength("long")}
            className="flex-1 py-2 text-sm font-semibold"
            style={{
              background: answerLength === "long" ? "linear-gradient(135deg, var(--ash-primary), #0e9f8e)" : "transparent",
              color: answerLength === "long" ? "white" : "var(--ash-text)",
            }}
          >
            Long
          </button>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type or speak your question…"
          className="flex-1 p-3 rounded-ash border"
        />
        <VoiceInput onText={(t) => setInput(t)} />
        <button
          onClick={send}
          disabled={loading || !input.trim()}
          className="px-5 py-3 rounded-ash text-white disabled:opacity-40"
          style={{ background: "linear-gradient(135deg, var(--ash-accent), var(--ash-primary))" }}
        >
          Send
        </button>
      </div>
      <button
        onClick={() => { setHistory([]); localStorage.removeItem(MEMORY_KEY); }}
        className="text-xs mt-2 self-end underline"
        style={{ color: "var(--ash-muted)" }}
      >
        Clear history
      </button>
    </main>
  );
}
