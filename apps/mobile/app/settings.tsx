import { View, Text, Pressable, Alert, Linking, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useProfile } from "@/lib/profile";
import { useAshTheme } from "@/lib/theme";
import { API_BASE } from "@/lib/api";

export default function SettingsScreen() {
  const router = useRouter();
  const profile = useProfile((s) => s.profile);
  const setProfile = useProfile((s) => s.setProfile);
  const t = useAshTheme();

  return (
    <ScrollView style={{ backgroundColor: t.palette.bg }} contentContainerStyle={{ padding: 16 }}>
      <View style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16, marginBottom: 12 }}>
        <Text style={{ fontWeight: "600", marginBottom: 8 }}>Profile</Text>
        {profile ? (
          <>
            <Text>Age: {profile.age}</Text>
            <Text>Country: {profile.country}</Text>
            <Text>Grade: {profile.grade}</Text>
            <Text>Curriculum: {profile.curriculum}</Text>
            <Pressable onPress={() => router.push("/onboarding")} style={{ marginTop: 8 }}>
              <Text style={{ color: t.palette.primary }}>Change</Text>
            </Pressable>
          </>
        ) : (
          <Pressable onPress={() => router.push("/onboarding")}><Text style={{ color: t.palette.primary }}>Set up profile</Text></Pressable>
        )}
      </View>

      <View style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16, marginBottom: 12 }}>
        <Text style={{ fontWeight: "600", marginBottom: 8 }}>Data</Text>
        <Pressable onPress={() => Linking.openURL(`${API_BASE}/api/account/export`)} style={{ paddingVertical: 8 }}>
          <Text style={{ color: t.palette.primary }}>Export my data</Text>
        </Pressable>
        <Pressable onPress={() => {
          Alert.alert("Wipe local data", "This clears the guest profile on this device.", [
            { text: "Cancel" },
            { text: "Wipe", style: "destructive", onPress: () => setProfile(null) },
          ]);
        }} style={{ paddingVertical: 8 }}>
          <Text style={{ color: "#dc2626" }}>Wipe local data</Text>
        </Pressable>
        <Pressable onPress={() => {
          Alert.alert("Delete account?", "This deletes your account and all data on the server.", [
            { text: "Cancel" },
            { text: "Delete", style: "destructive", onPress: async () => {
              try {
                const r = await fetch(`${API_BASE}/api/account/delete`, { method: "POST", credentials: "include" });
                const d = await r.json();
                Alert.alert(r.ok ? "Done" : "Error", d.note ?? d.error ?? "");
                if (r.ok) setProfile(null);
              } catch (e: any) { Alert.alert("Error", e.message); }
            } },
          ]);
        }} style={{ paddingVertical: 8 }}>
          <Text style={{ color: "#dc2626" }}>Delete account</Text>
        </Pressable>
      </View>

      <View style={{ backgroundColor: t.palette.surface, borderRadius: t.radius, padding: 16 }}>
        <Text style={{ fontWeight: "600", marginBottom: 8 }}>Legal</Text>
        <Pressable onPress={() => Linking.openURL(`${API_BASE}/privacy`)}><Text style={{ color: t.palette.primary, paddingVertical: 4 }}>Privacy Policy</Text></Pressable>
        <Pressable onPress={() => Linking.openURL(`${API_BASE}/terms`)}><Text style={{ color: t.palette.primary, paddingVertical: 4 }}>Terms of Use</Text></Pressable>
      </View>

      <Text style={{ color: t.palette.mutedText, fontSize: 11, marginTop: 20, textAlign: "center" }}>
        AI can make mistakes. Double-check with your teacher or textbook.
      </Text>
    </ScrollView>
  );
}
