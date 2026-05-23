"use client";
import { useEffect, useRef, useState } from "react";

// Web Speech API — free, browser-native, no server key required.
// Graceful fallback: show a hint if unsupported (Safari on some platforms is limited).

export function VoiceInput({ onText, lang = "en-US" }: { onText: (t: string) => void; lang?: string }) {
  const recRef = useRef<any>(null);
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    const SR = (typeof window !== "undefined") ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition : null;
    if (!SR) { setSupported(false); return; }
    const r = new SR();
    r.lang = lang;
    r.interimResults = true;
    r.continuous = false;
    r.onresult = (e: any) => {
      let transcript = "";
      for (let i = e.resultIndex; i < e.results.length; i++) transcript += e.results[i][0].transcript;
      onText(transcript);
    };
    r.onerror = () => setListening(false);
    r.onend = () => setListening(false);
    recRef.current = r;
  }, [lang, onText]);

  if (!supported) {
    return <span className="text-xs" title="Voice input needs Chrome or Edge" style={{ opacity: 0.5 }}>🎙️</span>;
  }
  return (
    <button
      type="button"
      onClick={() => {
        if (!recRef.current) return;
        if (listening) { recRef.current.stop(); setListening(false); }
        else { try { recRef.current.start(); setListening(true); } catch {} }
      }}
      className="px-2 py-1 rounded-ash"
      style={{
        background: listening ? "#dc2626" : "transparent",
        color: listening ? "white" : "var(--ash-primary)",
        border: "1px solid var(--ash-border)",
      }}
      aria-label={listening ? "Stop recording" : "Start voice input"}
    >
      {listening ? "● Rec" : "🎙️"}
    </button>
  );
}

export function SpeakButton({ text }: { text: string }) {
  const [supported, setSupported] = useState(true);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) setSupported(false);
  }, []);

  if (!supported || !text) return null;

  function speak() {
    const synth = window.speechSynthesis;
    if (speaking) { synth.cancel(); setSpeaking(false); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    synth.speak(u);
  }
  return (
    <button
      type="button"
      onClick={speak}
      className="px-2 py-1 rounded-ash text-xs"
      style={{ border: "1px solid var(--ash-border)", color: "var(--ash-primary)" }}
      aria-label={speaking ? "Stop speaking" : "Speak"}
    >
      {speaking ? "■ Stop" : "🔊 Listen"}
    </button>
  );
}
