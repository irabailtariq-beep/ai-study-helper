import { useMemo, useState } from "react";
import { View, Text, Pressable, ScrollView, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import {
  COUNTRIES,
  curriculaForCountry,
  searchCurricula,
  themeForAge,
  type CountryCode,
} from "@ash/core";
import { useProfile } from "@/lib/profile";

export default function Onboarding() {
  const router = useRouter();
  const setProfile = useProfile((s) => s.setProfile);
  const [step, setStep] = useState(0);
  const [countryQuery, setCountryQuery] = useState("");
  const [country, setCountry] = useState<CountryCode | "">("");
  const [age, setAge] = useState("14");
  const [grade, setGrade] = useState("");
  const [curriculumQuery, setCurriculumQuery] = useState("");
  const [curriculum, setCurriculum] = useState("");

  const filteredCountries = useMemo(() => {
    const q = countryQuery.trim().toLowerCase();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter((c) => c.name.toLowerCase().includes(q));
  }, [countryQuery]);

  const curricula = useMemo(
    () => (country ? searchCurricula(country, curriculumQuery) : []),
    [country, curriculumQuery]
  );
  const currentCurriculum = country
    ? curriculaForCountry(country).find((c) => c.id === curriculum)
    : undefined;

  const ageNum = Math.max(4, Math.min(99, Number(age) || 14));
  const preview = themeForAge(ageNum);

  function finish() {
    if (!country || !curriculum || !grade) return;
    setProfile({ country, age: ageNum, grade, curriculum });
    router.replace("/");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Let's set you up</Text>

      <View style={styles.progress}>
        {[0, 1, 2, 3].map((i) => (
          <View key={i} style={[styles.bar, { backgroundColor: i <= step ? "#4F46E5" : "#e5e7eb" }]} />
        ))}
      </View>

      {step === 0 && (
        <View>
          <Text style={styles.q}>Country</Text>
          <TextInput
            value={countryQuery}
            onChangeText={setCountryQuery}
            placeholder="Search country…"
            style={styles.input}
          />
          {filteredCountries.map((c) => (
            <Pressable key={c.code} onPress={() => setCountry(c.code)}
              style={[styles.opt, country === c.code && styles.optSel]}>
              <Text style={country === c.code ? styles.optSelText : styles.optText}>
                {c.flag}  {c.name}
              </Text>
            </Pressable>
          ))}
        </View>
      )}

      {step === 1 && (
        <View>
          <Text style={styles.q}>Age</Text>
          <TextInput
            value={age}
            onChangeText={setAge}
            keyboardType="number-pad"
            style={styles.input}
            placeholder="14"
          />
          <View style={[styles.previewBox, { backgroundColor: preview.palette.bg }]}>
            <Text style={{ color: preview.palette.primary, fontWeight: "700" }}>Preview at age {ageNum}</Text>
            <Text style={{ color: preview.palette.mutedText, marginTop: 4 }}>Tone: {preview.aiTone}</Text>
          </View>
        </View>
      )}

      {step === 2 && (
        <View>
          <Text style={styles.q}>Curriculum</Text>
          <TextInput
            value={curriculumQuery}
            onChangeText={setCurriculumQuery}
            placeholder="Search (CBSE, IGCSE, Matric, AP…)"
            style={styles.input}
          />
          {curricula.map((c) => (
            <Pressable key={c.id} onPress={() => { setCurriculum(c.id); setGrade(""); }}
              style={[styles.opt, curriculum === c.id && styles.optSel]}>
              <Text style={curriculum === c.id ? styles.optSelText : styles.optText}>{c.name}</Text>
              {c.region && (
                <Text style={{ fontSize: 11, marginTop: 2,
                  color: curriculum === c.id ? "rgba(255,255,255,0.85)" : "#6b7280" }}>
                  {c.region}
                </Text>
              )}
            </Pressable>
          ))}
          {curricula.length === 0 && (
            <Text style={{ color: "#6b7280", fontSize: 13 }}>No match. Try another term.</Text>
          )}
        </View>
      )}

      {step === 3 && (
        <View>
          <Text style={styles.q}>Class / grade</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {currentCurriculum?.grades.map((g) => (
              <Pressable key={g} onPress={() => setGrade(g)}
                style={[styles.gradeOpt, grade === g && styles.optSel]}>
                <Text style={grade === g ? styles.optSelText : styles.optText}>{g}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      <View style={styles.nav}>
        <Pressable disabled={step === 0} onPress={() => setStep(step - 1)} style={styles.navBtn}>
          <Text style={{ opacity: step === 0 ? 0.4 : 1 }}>Back</Text>
        </Pressable>
        {step < 3 ? (
          <Pressable
            disabled={(step === 0 && !country) || (step === 2 && !curriculum)}
            onPress={() => setStep(step + 1)}
            style={[styles.navBtn, styles.navPrimary]}
          >
            <Text style={{ color: "white" }}>Next</Text>
          </Pressable>
        ) : (
          <Pressable disabled={!grade} onPress={finish} style={[styles.navBtn, styles.navPrimary]}>
            <Text style={{ color: "white" }}>Finish</Text>
          </Pressable>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  progress: { flexDirection: "row", gap: 4, marginBottom: 20 },
  bar: { height: 4, flex: 1, borderRadius: 2 },
  q: { fontSize: 16, fontWeight: "600", marginBottom: 12 },
  opt: { padding: 14, borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, marginBottom: 8 },
  optSel: { backgroundColor: "#4F46E5", borderColor: "#4F46E5" },
  optText: { color: "#1F2937" },
  optSelText: { color: "white" },
  gradeOpt: { padding: 8, borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 8, margin: 4, minWidth: 80, alignItems: "center" },
  input: { borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, padding: 12, fontSize: 16, marginBottom: 12 },
  previewBox: { padding: 12, borderRadius: 10 },
  nav: { flexDirection: "row", justifyContent: "space-between", marginTop: 30 },
  navBtn: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10, borderWidth: 1, borderColor: "#e5e7eb" },
  navPrimary: { backgroundColor: "#4F46E5", borderColor: "#4F46E5" },
});
