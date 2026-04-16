import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerTitleStyle: { fontWeight: "700" } }}>
        <Stack.Screen name="index" options={{ title: "AI Study Helper" }} />
        <Stack.Screen name="onboarding" options={{ title: "Set up" }} />
        <Stack.Screen name="explain" options={{ title: "Explain" }} />
        <Stack.Screen name="chat" options={{ title: "Tutor chat" }} />
        <Stack.Screen name="quiz" options={{ title: "Quiz" }} />
        <Stack.Screen name="past-papers" options={{ title: "Past papers" }} />
        <Stack.Screen name="flashcards" options={{ title: "Flashcards" }} />
        <Stack.Screen name="progress" options={{ title: "Progress" }} />
        <Stack.Screen name="settings" options={{ title: "Settings" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
