import { useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView, ActivityIndicator, TextInput } from "react-native";
import { useProfile } from "@/lib/profile";
import { useAshTheme } from "@/lib/theme";
import { API_BASE } from "@/lib/api";

type Card = { id: string; front: string; back: string; due_at: string; reps: number };

export default function FlashcardsScreen() {
  const t = useAshTheme();
  const profile = useProfile((s) => s.profile);
  const [cards, setCards] = useState<Card[]>([]);
  const [due, setDue] = useState<Card[]>([]);
  const [current, setCurrent] = useState<Card | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [source, setSource] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    try {
      const r = await fetch(`${API_BASE}/api/flashcards`, { credentials: "include" });
      if (!r.ok) { setErr("Sign in on the web app to use flashcards."); return; }
      const d = await r.json();
      setCards(d.cards ?? []);
      setDue(d.due ?? []);
      setCurrent((d.due ?? [])[0] ?? null);
      setFlipped(false);
    } catch (e: any) { setErr(e.message); }
  }
  useEffect(() => { load(); }, []);

  async function review(quality: number) {
    if (!current) return;
    await fetch(`${API_BASE}/api/flashcards`, {
      method: "POST", headers: { "content-type": "application/json" }, credentials: "include",
      body: JSON.stringify({ action: "review", id: current.id, quality }),
    });
    const next = due.slice(1);
    setDue(next); setCurrent(next[0] ?? null); setFlipped(false);
  }

  async function generate() {
    if (!profile) return;
    if (!source) return;
    setBusy(true); setErr(null);
    try {
      const r = await fetch(`${API_BASE}/api/flashcards`, {
        method: "POST", headers: { "content-type": "application/json" }, credentials: "include",
        body: JSON.stringify({ action: "generate", profile, sourceText: source, count: 10 }),
      });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error ?? "Failed");
      await load();
    } catch (e: any) { setErr(e.message); } finally { setBusy(false); }
  }

  return (
    <ScrollView style={{ backgroundColor: t.palette.bg }} contentContainerStyle={{ padding: 16 }}>
      {err && <Text style={{ color: "#dc2626", marginBottom: 12 }}>{err}</Text>}
      {current ? (
        <Pressable onPress={() => setFlipped((f) => !f)}
          style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 24, minHeight: 180, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: t.palette.mutedText, fontSize: 12, marginBottom: 8 }}>
            {flipped ? "Answer" : "Question"} · tap to flip
          </Text>
          <Text style={{ fontSize: 18, textAlign: "center" }}>{flipped ? current.back : current.front}</Text>
        </Pressable>
      ) : (
        <View style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 24, alignItems: "center" }}>
          <Text style={{ color: t.palette.mutedText }}>
            {cards.length === 0 ? "No cards yet — generate some below." : "Nothing due right now."}
          </Text>
        </View>
      )}
      {current && flipped && (
        <View style={{ flexDirection: "row", gap: 6, marginTop: 12 }}>
          {[{ q: 1, l: "Again", c: "#dc2626" }, { q: 3, l: "Hard", c: "#ea580c" }, { q: 4, l: "Good", c: "#16a34a" }, { q: 5, l: "Easy", c: "#2563eb" }].map((b) => (
            <Pressable key={b.q} onPress={() => review(b.q)} style={{ backgroundColor: b.c, padding: 12, borderRadius: t.radius, flex: 1, alignItems: "center" }}>
              <Text style={{ color: "white", fontWeight: "600" }}>{b.l}</Text>
            </Pressable>
          ))}
        </View>
      )}

      <View style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16, marginTop: 20 }}>
        <Text style={{ fontWeight: "600", marginBottom: 6 }}>Generate from material</Text>
        <TextInput multiline value={source} onChangeText={setSource} placeholder="Paste a lesson…"
          style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: t.radius, padding: 10, minHeight: 80 }} />
        <Pressable onPress={generate} disabled={busy} style={{ backgroundColor: t.palette.primary, padding: 10, borderRadius: t.radius, alignItems: "center", marginTop: 8, opacity: busy ? 0.5 : 1 }}>
          {busy ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "white", fontWeight: "600" }}>Generate 10 cards</Text>}
        </Pressable>
      </View>
      <Text style={{ color: t.palette.mutedText, fontSize: 12, marginTop: 12 }}>{due.length} due · {cards.length} total</Text>
    </ScrollView>
  );
}
