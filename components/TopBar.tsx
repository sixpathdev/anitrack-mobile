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
          uri: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
        }}
        className="h-10 w-10 rounded-full border border-[#ddb7ff]"
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
