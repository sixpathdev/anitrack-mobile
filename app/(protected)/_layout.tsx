import { Stack } from "expo-router";

export default function ProtectedLayout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}

      {/* <Stack.Screen name="wallet/top-up" options={{ title: "Fund Wallet" }} /> */}
    </Stack>
  );
}
