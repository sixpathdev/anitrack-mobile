import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding-screen" options={{ headerShown: false }} />
    </Stack>
  );
}
