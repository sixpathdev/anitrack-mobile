import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GradientLogo from "./home/GradientLogo";
import { useRouter } from "expo-router";

export default function TopBar() {
  const router = useRouter();


  return (
    <View className="flex-row items-center justify-between px-5 py-4">
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
        }}
        className="h-10 w-10 rounded-full border-2 border-[#ddb7ff]"
      />

      <GradientLogo />

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => router.push("/notifications")}
      >
        <MaterialIcons name="notifications-none" size={26} color="#ddb7ff" />
      </TouchableOpacity>
    </View>
  );
}
