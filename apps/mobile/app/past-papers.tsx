import { useState } from "react";
import { View, Text, Pressable, ScrollView, ActivityIndicator } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { useProfile } from "@/lib/profile";
import { useAshTheme } from "@/lib/theme";
import { apiPost } from "@/lib/api";

type Paper = { title: string; sections: { name: string; marks: number; items: { q: string; marks: number }[] }[] };

export default function PastPapersScreen() {
  const profile = useProfile((s) => s.profile);
  const t = useAshTheme();
  const [att, setAtt] = useState<{ base64: string; mimeType: string; name: string } | null>(null);
  const [count, setCount] = useState(3);
  const [loading, setLoading] = useState(false);
  const [papers, setPapers] = useState<Paper[]>([]);
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
    if (!att) return setErr("Upload a paper first.");
    setErr(null); setPapers([]); setLoading(true);
    try {
      const payload: any = { profile, count };
      if (att.mimeType === "application/pdf") payload.pdfBase64 = att.base64; else payload.imageBase64 = att.base64;
      const data = await apiPost<{ papers: Paper[] }>("/api/past-papers", payload);
      setPapers(data.papers ?? []);
    } catch (e: any) { setErr(e.message); } finally { setLoading(false); }
  }

  return (
    <ScrollView style={{ backgroundColor: t.palette.bg }} contentContainerStyle={{ padding: 16 }}>
      <View style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16 }}>
        <Text style={{ color: t.palette.mutedText, marginBottom: 10 }}>Upload a past paper. I'll generate practice papers matching its structure.</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Pressable onPress={pickImage} style={{ padding: 10, borderRadius: t.radius, borderWidth: 1, borderColor: "#e5e7eb" }}><Text>📷 Photo</Text></Pressable>
          <Pressable onPress={pickPdf} style={{ padding: 10, borderRadius: t.radius, borderWidth: 1, borderColor: "#e5e7eb" }}><Text>📄 PDF</Text></Pressable>
        </View>
        {att && <Text style={{ marginTop: 6, fontSize: 12, color: t.palette.mutedText }}>Attached: {att.name}</Text>}
        <Text style={{ marginTop: 10 }}>Papers: {count}</Text>
        <View style={{ flexDirection: "row", marginTop: 4 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Pressable key={n} onPress={() => setCount(n)}
              style={{ marginRight: 6, padding: 6, borderRadius: 6, borderWidth: 1, borderColor: count === n ? t.palette.primary : "#e5e7eb", backgroundColor: count === n ? t.palette.primary : "transparent" }}>
              <Text style={{ color: count === n ? "white" : t.palette.text }}>{n}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable disabled={loading || !att} onPress={generate}
          style={{ backgroundColor: t.palette.primary, padding: 12, borderRadius: t.radius, alignItems: "center", marginTop: 14, opacity: loading || !att ? 0.5 : 1 }}>
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "white", fontWeight: "600" }}>Generate practice papers</Text>}
        </Pressable>
        {err && <Text style={{ color: "red", marginTop: 8 }}>{err}</Text>}
      </View>

      {papers.map((p, pi) => (
        <View key={pi} style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16, marginTop: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 8 }}>{p.title}</Text>
          {p.sections?.map((sec, si) => (
            <View key={si} style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "600" }}>{sec.name} ({sec.marks} marks)</Text>
              {sec.items?.map((it, i) => (
                <Text key={i} style={{ marginLeft: 6, marginTop: 4 }}>{i + 1}. {it.q}  [{it.marks}]</Text>
              ))}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
