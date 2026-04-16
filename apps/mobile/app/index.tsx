import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import { useProfile } from "@/lib/profile";
import { useAshTheme } from "@/lib/theme";

export default function Home() {
  const profile = useProfile((s) => s.profile);
  const theme = useAshTheme();
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.palette.bg }} contentContainerStyle={styles.container}>
      <Text style={[styles.title, { color: theme.palette.primary, fontSize: theme.fontBase * theme.fontScale * 1.3 }]}>
        AI Study Helper
      </Text>

      {!profile ? (
        <View style={[styles.card, { backgroundColor: theme.palette.surface, borderRadius: theme.radius }]}>
          <Text style={{ fontSize: theme.fontBase + 2, fontWeight: "600", color: theme.palette.text, marginBottom: 8 }}>
            Your personal AI tutor
          </Text>
          <Text style={{ color: theme.palette.mutedText, marginBottom: 16 }}>
            Upload a photo or PDF, or just ask. I'll explain it in a way that fits your age and class.
          </Text>
          <Pressable
            onPress={() => router.push("/onboarding")}
            style={({ pressed }) => [
              styles.btn,
              { backgroundColor: theme.palette.primary, borderRadius: theme.radius, opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Text style={styles.btnText}>Get started</Text>
          </Pressable>
        </View>
      ) : (
        <>
          <Text style={{ color: theme.palette.mutedText, marginBottom: 16 }}>
            {profile.grade} · age {profile.age}
          </Text>
          <Tile href="/explain" emoji="📖" title="Explain" subtitle="Photo, PDF, or question" theme={theme} />
          <Tile href="/quiz" emoji="🧠" title="Quiz me" subtitle="Generate a quiz from material" theme={theme} />
          <Tile href="/chat" emoji="💬" title="Chat tutor" subtitle="Ask me anything" theme={theme} />
          <Tile href="/past-papers" emoji="📝" title="Past papers" subtitle="Upload real paper, get practice" theme={theme} />
          <Tile href="/flashcards" emoji="🃏" title="Flashcards" subtitle="Spaced repetition (needs sign-in)" theme={theme} />
          <Tile href="/progress" emoji="🔥" title="Progress" subtitle="Streaks and review history" theme={theme} />
          <Tile href="/settings" emoji="⚙️" title="Settings" subtitle="Profile, export, delete" theme={theme} />
        </>
      )}

      <Text style={{ color: theme.palette.mutedText, fontSize: 11, marginTop: 24, textAlign: "center" }}>
        AI can make mistakes. Double-check with your teacher or textbook.
      </Text>
    </ScrollView>
  );
}

function Tile({ href, emoji, title, subtitle, theme }: any) {
  return (
    <Link href={href} asChild>
      <Pressable style={[styles.tile, { backgroundColor: theme.palette.surface, borderRadius: theme.radius }]}>
        <Text style={{ fontSize: 26 }}>{emoji}</Text>
        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={{ fontWeight: "600", fontSize: theme.fontBase + 1, color: theme.palette.text }}>{title}</Text>
          <Text style={{ color: theme.palette.mutedText, fontSize: theme.fontBase - 2 }}>{subtitle}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontWeight: "700", marginBottom: 24 },
  card: { padding: 20 },
  btn: { paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" },
  btnText: { color: "white", fontWeight: "600", fontSize: 16 },
  tile: { flexDirection: "row", alignItems: "center", padding: 16, marginBottom: 12 },
});
