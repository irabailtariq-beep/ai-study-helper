import { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useProfile } from "@/lib/profile";
import { useAshTheme } from "@/lib/theme";
import { apiPost } from "@/lib/api";
import type { ChatTurn } from "@ash/core";

const MEMORY_KEY = "ash-chat-history";

export default function Chat() {
  const profile = useProfile((s) => s.profile);
  const theme = useAshTheme();
  const [history, setHistory] = useState<ChatTurn[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    AsyncStorage.getItem(MEMORY_KEY).then((v) => { if (v) setHistory(JSON.parse(v)); });
  }, []);
  useEffect(() => {
    AsyncStorage.setItem(MEMORY_KEY, JSON.stringify(history));
    setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 50);
  }, [history]);

  if (!profile) return <View style={{ padding: 20 }}><Text>Finish onboarding first.</Text></View>;

  async function send() {
    if (!input.trim() || loading) return;
    const next = [...history, { role: "user" as const, content: input.trim() }];
    setHistory(next); setInput(""); setLoading(true);
    try {
      const recent = next.slice(-20);
      const older = next.slice(0, -20);
      const memory = older.length ? `Earlier we discussed: ${older.slice(0, 5).map(t => t.content).join(" | ")}` : undefined;
      const data = await apiPost<{ reply: string }>("/api/chat", { profile, history: recent, memory });
      setHistory([...next, { role: "assistant", content: data.reply }]);
    } catch (e: any) {
      setHistory([...next, { role: "assistant", content: `⚠️ ${e.message}` }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.palette.bg }}>
      <ScrollView ref={scrollRef} contentContainerStyle={{ padding: 16 }}>
        {history.length === 0 && (
          <Text style={{ color: theme.palette.mutedText }}>
            Ask me anything. I'll adapt to your age and curriculum.
          </Text>
        )}
        {history.map((t, i) => (
          <View key={i} style={{ alignItems: t.role === "user" ? "flex-end" : "flex-start", marginBottom: 10 }}>
            <View style={{
              backgroundColor: t.role === "user" ? theme.palette.primary : theme.palette.surface,
              padding: 10, borderRadius: theme.radius, maxWidth: "85%",
            }}>
              <Text style={{ color: t.role === "user" ? "white" : theme.palette.text }}>{t.content}</Text>
            </View>
          </View>
        ))}
        {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
      </ScrollView>
      <View style={{ flexDirection: "row", padding: 12, borderTopWidth: 1, borderColor: "#e5e7eb" }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type…"
          style={{ flex: 1, borderWidth: 1, borderColor: "#e5e7eb", borderRadius: theme.radius, padding: 10 }}
        />
        <Pressable onPress={send} style={{ backgroundColor: theme.palette.primary, padding: 12, borderRadius: theme.radius, marginLeft: 8 }}>
          <Text style={{ color: "white", fontWeight: "600" }}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
}
