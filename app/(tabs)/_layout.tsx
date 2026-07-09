import { Tabs } from "expo-router";
import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ddb7ff",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#171f33",
          height: 70,
          borderRadius: 22,
          marginHorizontal: 16,
          marginBottom: 20,
          paddingTop: 8,
          paddingBottom: 8,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          overflow: "hidden",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={"home"}
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"search"} size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add-anime"
        options={{
          title: "Add Anime",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={"add-circle"}
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"calendar"} size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"settings"} size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
