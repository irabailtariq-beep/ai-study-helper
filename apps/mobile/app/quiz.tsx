import { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { useProfile } from "@/lib/profile";
import { useAshTheme } from "@/lib/theme";
import { apiPost } from "@/lib/api";
import type { Quiz, QuizItem } from "@ash/core";

export default function QuizScreen() {
  const profile = useProfile((s) => s.profile);
  const t = useAshTheme();
  const [text, setText] = useState("");
  const [count, setCount] = useState(8);
  const [att, setAtt] = useState<{ base64: string; mimeType: string; name: string } | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [revealed, setRevealed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  if (!profile) return <View style={{ padding: 20 }}><Text>Finish onboarding first.</Text></View>;

  async function pickImage() {
    const r = await ImagePicker.launchImageLibraryAsync({ base64: true, quality: 0.8 });
    if (r.canceled || !r.assets[0]?.base64) return;
    const a = r.assets[0];
    setAtt({ base64: `data:${a.mimeType ?? "image/jpeg"};base64,${a.base64}`, mimeType: a.mimeType ?? "image/jpeg", name: a.fileName ?? "photo.jpg" });
  }
  async function pickPdf() {
    const r = await DocumentPicker.getDocumentAsync({ type: "application/pdf" });
    if (r.canceled || !r.assets[0]) return;
    const a = r.assets[0];
    const b64 = await FileSystem.readAsStringAsync(a.uri, { encoding: FileSystem.EncodingType.Base64 });
    setAtt({ base64: `data:application/pdf;base64,${b64}`, mimeType: "application/pdf", name: a.name });
  }

  async function generate() {
    setErr(null); setQuiz(null); setAnswers({}); setRevealed(false); setLoading(true);
    try {
      const payload: any = { profile, sourceText: text || undefined, count };
      if (att) {
        if (att.mimeType === "application/pdf") payload.pdfBase64 = att.base64; else payload.imageBase64 = att.base64;
      }
      const data = await apiPost<Quiz>("/api/quiz", payload);
      setQuiz(data);
    } catch (e: any) { setErr(e.message); } finally { setLoading(false); }
  }

  return (
    <ScrollView style={{ backgroundColor: t.palette.bg }} contentContainerStyle={{ padding: 16 }}>
      {!quiz && (
        <View style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16 }}>
          <TextInput multiline value={text} onChangeText={setText} placeholder="Paste material or upload below"
            style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: t.radius, padding: 10, minHeight: 90 }} />
          <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
            <Pressable onPress={pickImage} style={{ padding: 10, borderRadius: t.radius, borderWidth: 1, borderColor: "#e5e7eb" }}><Text>📷 Photo</Text></Pressable>
            <Pressable onPress={pickPdf} style={{ padding: 10, borderRadius: t.radius, borderWidth: 1, borderColor: "#e5e7eb" }}><Text>📄 PDF</Text></Pressable>
          </View>
          {att && <Text style={{ marginTop: 6, fontSize: 12, color: t.palette.mutedText }}>Attached: {att.name}</Text>}
          <Text style={{ marginTop: 10 }}>Questions: {count}</Text>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            {[4, 6, 8, 12, 16, 20].map((n) => (
              <Pressable key={n} onPress={() => setCount(n)}
                style={{ marginRight: 6, padding: 6, borderRadius: 6, borderWidth: 1, borderColor: count === n ? t.palette.primary : "#e5e7eb", backgroundColor: count === n ? t.palette.primary : "transparent" }}>
                <Text style={{ color: count === n ? "white" : t.palette.text }}>{n}</Text>
              </Pressable>
            ))}
          </View>
          <Pressable disabled={loading || (!text && !att)} onPress={generate}
            style={{ backgroundColor: t.palette.primary, padding: 12, borderRadius: t.radius, alignItems: "center", marginTop: 14, opacity: loading || (!text && !att) ? 0.5 : 1 }}>
            {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "white", fontWeight: "600" }}>Generate</Text>}
          </Pressable>
          {err && <Text style={{ color: "red", marginTop: 8 }}>{err}</Text>}
        </View>
      )}

      {quiz && (
        <View style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>{quiz.title}</Text>
          {quiz.items.map((item, i) => <QuizItemView key={i} item={item} index={i} answers={answers} setAnswers={setAnswers} revealed={revealed} t={t} />)}
          <View style={{ flexDirection: "row", gap: 8, marginTop: 12 }}>
            <Pressable onPress={() => setRevealed(true)} style={{ backgroundColor: t.palette.primary, padding: 10, borderRadius: t.radius, flex: 1, alignItems: "center" }}>
              <Text style={{ color: "white", fontWeight: "600" }}>Show answers</Text>
            </Pressable>
            <Pressable onPress={() => { setQuiz(null); setAnswers({}); setRevealed(false); }} style={{ padding: 10, borderRadius: t.radius, borderWidth: 1, borderColor: "#e5e7eb", flex: 1, alignItems: "center" }}>
              <Text>New quiz</Text>
            </Pressable>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

function QuizItemView({ item, index, answers, setAnswers, revealed, t }: any) {
  const set = (v: any) => setAnswers((a: any) => ({ ...a, [index]: v }));
  return (
    <View style={{ borderTopWidth: 1, borderColor: "#eee", paddingTop: 10, marginTop: 10 }}>
      <Text style={{ fontWeight: "600", marginBottom: 6 }}>{index + 1}. {item.q}</Text>
      {item.type === "mcq" && item.options.map((opt: string, j: number) => (
        <Pressable key={j} onPress={() => set(j)}
          style={{ padding: 8, marginVertical: 2, borderWidth: 1, borderRadius: 6,
            borderColor: revealed && j === item.answerIndex ? "#16a34a" : answers[index] === j ? t.palette.primary : "#e5e7eb" }}>
          <Text>{opt}</Text>
        </Pressable>
      ))}
      {item.type === "tf" && (
        <View style={{ flexDirection: "row", gap: 8 }}>
          {[true, false].map((v) => (
            <Pressable key={String(v)} onPress={() => set(v)}
              style={{ padding: 8, borderWidth: 1, borderRadius: 6, borderColor: answers[index] === v ? t.palette.primary : "#e5e7eb" }}>
              <Text>{v ? "True" : "False"}</Text>
            </Pressable>
          ))}
        </View>
      )}
      {(item.type === "short" || item.type === "fill") && (
        <TextInput value={answers[index] ?? ""} onChangeText={set} placeholder="Your answer"
          style={{ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 6, padding: 8 }} />
      )}
      {revealed && (
        <Text style={{ color: t.palette.mutedText, marginTop: 6, fontSize: 12 }}>
          Answer: {item.type === "mcq" ? item.options[item.answerIndex] : item.type === "tf" ? (item.answer ? "True" : "False") : item.answer}
          {item.why ? ` — ${item.why}` : item.rubric ? ` — ${item.rubric}` : ""}
        </Text>
      )}
    </View>
  );
}
