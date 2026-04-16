import { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { useProfile } from "@/lib/profile";
import { useAshTheme } from "@/lib/theme";
import { apiPost } from "@/lib/api";
import type { ExplainResponse } from "@ash/core";

export default function Explain() {
  const profile = useProfile((s) => s.profile);
  const theme = useAshTheme();
  const [text, setText] = useState("");
  const [attachment, setAttachment] = useState<{ name: string; base64: string; mimeType: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ExplainResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (!profile) {
    return <View style={{ padding: 20 }}><Text>Finish onboarding first.</Text></View>;
  }

  async function pickImage() {
    const r = await ImagePicker.launchImageLibraryAsync({ base64: true, quality: 0.8 });
    if (r.canceled || !r.assets[0]?.base64) return;
    const a = r.assets[0];
    setAttachment({
      name: a.fileName ?? "photo.jpg",
      base64: `data:${a.mimeType ?? "image/jpeg"};base64,${a.base64}`,
      mimeType: a.mimeType ?? "image/jpeg",
    });
  }

  async function pickPdf() {
    const r = await DocumentPicker.getDocumentAsync({ type: "application/pdf", copyToCacheDirectory: true });
    if (r.canceled || !r.assets[0]) return;
    const a = r.assets[0];
    const b64 = await FileSystem.readAsStringAsync(a.uri, { encoding: FileSystem.EncodingType.Base64 });
    setAttachment({ name: a.name, base64: `data:application/pdf;base64,${b64}`, mimeType: "application/pdf" });
  }

  async function submit() {
    setError(null); setResult(null); setLoading(true);
    try {
      const payload: any = { profile, text: text || undefined };
      if (attachment) {
        if (attachment.mimeType === "application/pdf") payload.pdfBase64 = attachment.base64;
        else payload.imageBase64 = attachment.base64;
      }
      const data = await apiPost<ExplainResponse>("/api/explain", payload);
      setResult(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={{ backgroundColor: theme.palette.bg }} contentContainerStyle={{ padding: 20 }}>
      <View style={[card(theme)]}>
        <TextInput
          multiline
          value={text}
          onChangeText={setText}
          placeholder="Paste a question, topic, or paragraph…"
          style={[input(theme), { minHeight: 100 }]}
        />
        <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
          <Pressable onPress={pickImage} style={[btnSecondary(theme)]}><Text>📷 Photo</Text></Pressable>
          <Pressable onPress={pickPdf} style={[btnSecondary(theme)]}><Text>📄 PDF</Text></Pressable>
        </View>
        {attachment && (
          <Text style={{ color: theme.palette.mutedText, marginTop: 6, fontSize: 12 }}>
            Attached: {attachment.name}
          </Text>
        )}
        <Pressable
          disabled={loading || (!text && !attachment)}
          onPress={submit}
          style={[btnPrimary(theme), { marginTop: 14, opacity: loading || (!text && !attachment) ? 0.5 : 1 }]}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "white", fontWeight: "600" }}>Explain it</Text>}
        </Pressable>
        {error && <Text style={{ color: "red", marginTop: 8 }}>{error}</Text>}
      </View>

      {result && (
        <View style={[card(theme), { marginTop: 16 }]}>
          <Text style={{ fontWeight: "700", fontSize: 16, marginBottom: 8 }}>Explanation</Text>
          <Text style={{ color: theme.palette.text, marginBottom: 12 }}>{result.explanation}</Text>
          {result.keyPoints?.length > 0 && (
            <>
              <Text style={{ fontWeight: "600", marginBottom: 4 }}>Key points</Text>
              {result.keyPoints.map((k, i) => <Text key={i} style={{ marginLeft: 8 }}>• {k}</Text>)}
            </>
          )}
          {result.followUps?.length > 0 && (
            <>
              <Text style={{ fontWeight: "600", marginTop: 8, marginBottom: 4 }}>Try next</Text>
              {result.followUps.map((k, i) => <Text key={i} style={{ marginLeft: 8 }}>• {k}</Text>)}
            </>
          )}
          <Text style={{ color: theme.palette.mutedText, fontSize: 11, marginTop: 12 }}>{result.disclaimer}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const card = (t: any) => ({ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16 });
const input = (t: any) => ({ borderWidth: 1, borderColor: "#e5e7eb", borderRadius: t.radius, padding: 10, color: t.palette.text });
const btnPrimary = (t: any) => ({ backgroundColor: t.palette.primary, padding: 12, borderRadius: t.radius, alignItems: "center" as const });
const btnSecondary = (t: any) => ({ backgroundColor: t.palette.bg, padding: 10, borderRadius: t.radius, borderWidth: 1, borderColor: "#e5e7eb" });
