import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { useAshTheme } from "@/lib/theme";
import { API_BASE } from "@/lib/api";

export default function ProgressScreen() {
  const t = useAshTheme();
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch(`${API_BASE}/api/progress`, { credentials: "include" }).then((r) => r.json()).then(setData).catch(() => setData({ signedIn: false }));
  }, []);
  if (!data) return <View style={{ padding: 20 }}><Text>Loading…</Text></View>;
  if (!data.signedIn) {
    return (
      <View style={{ padding: 20 }}>
        <Text>Sign in on the web app to sync progress across devices.</Text>
      </View>
    );
  }
  return (
    <ScrollView style={{ backgroundColor: t.palette.bg }} contentContainerStyle={{ padding: 16 }}>
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Card label="Current" value={`${data.streak.current} 🔥`} t={t} />
        <Card label="Longest" value={`${data.streak.longest}`} t={t} />
        <Card label="Active days" value={`${data.streak.totalDays}`} t={t} />
      </View>
      <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
        <Card label="Quizzes" value={`${data.quizCount}`} t={t} />
        <Card label="Flashcards" value={`${data.cardCount}`} t={t} />
      </View>
      <View style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16, marginTop: 12 }}>
        <Text style={{ fontWeight: "600", marginBottom: 8 }}>Last 14 days</Text>
        <View style={{ flexDirection: "row", alignItems: "flex-end", height: 80, gap: 3 }}>
          {(data.last14 ?? []).map((d: any, i: number) => {
            const total = d.explains + d.quizzes + d.chats + d.cards_reviewed;
            const h = Math.min(80, total * 4);
            return <View key={i} style={{ flex: 1, backgroundColor: t.palette.primary, height: h, minHeight: 2, borderRadius: 2 }} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

function Card({ label, value, t }: any) {
  return (
    <View style={{ flex: 1, backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 12 }}>
      <Text style={{ fontSize: 11, color: t.palette.mutedText }}>{label}</Text>
      <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 4 }}>{value}</Text>
    </View>
  );
}
