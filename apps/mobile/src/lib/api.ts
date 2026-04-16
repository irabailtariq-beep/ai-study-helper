import Constants from "expo-constants";

// Point mobile at your local web backend. On iOS sim, localhost works.
// On Android emu, use 10.0.2.2. On a real device, use your Mac's LAN IP.
// Override via EXPO_PUBLIC_API_BASE env var in .env or eas.json.
export const API_BASE =
  process.env.EXPO_PUBLIC_API_BASE ||
  Constants.expoConfig?.extra?.apiBase ||
  "http://localhost:3000";

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error ?? "Request failed");
  return data as T;
}
