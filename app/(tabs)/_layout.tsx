import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            // <IconSymbol size={28} name="house.fill" color={color} />
            <Ionicons
              name={"home"}
              size={22}
              // color={active ? "#ec5b13" : "#9CA3AF"}
              color={"#9CA3AF"}
            />
          ),
        }}
      /> */}

      {/* <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={"search"}
              size={22}
              color={"#9CA3AF"}
            />
          ),
        }}
      /> */}

      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"calendar"} size={22} color={"#9CA3AF"} />
          ),
        }}
      />
    </Tabs>
  );
}
