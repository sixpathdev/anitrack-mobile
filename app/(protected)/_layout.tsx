import { Stack } from "expo-router";

export default function ProtectedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#0b1326",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "700",
          color: "#fff",
        },
      }}
    >
      <Stack.Screen name="profile/edit" options={{ title: "Edit Profile" }} />
      <Stack.Screen name="general/faq" options={{ title: "FAQ" }} />
      <Stack.Screen
        name="general/favorites"
        options={{ title: "My Favorites" }}
      />
      <Stack.Screen
        name="general/about"
        options={{ title: "About AniTrack" }}
      />
      <Stack.Screen name="general/support" options={{ title: "Support" }} />
      <Stack.Screen
        name="general/privacy-policy"
        options={{ title: "Privacy Policy" }}
      />
      <Stack.Screen
        name="notifications/index"
        options={{ title: "Notifications" }}
      />
      <Stack.Screen
        name="recommend-friend/index"
        options={{ title: "Recommend to Friend" }}
      />
      <Stack.Screen
        name="recommend-friend/recommendations-sent"
        options={{ title: "Recommendations Sent" }}
      />
      <Stack.Screen
        name="modal/support/send-report"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />
      <Stack.Screen name="anime/[id]" options={{ title: "Anime Details" }} />
    </Stack>
  );
}
