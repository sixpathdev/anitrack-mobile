import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GradientLogo from "../home/GradientLogo";
// import GradientLogo from "./GradientLogo";

export default function TopBar() {
  return (
    <View className="flex-row items-center justify-between px-5 py-4">
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43",
        }}
        className="h-10 w-10 rounded-full border-2 border-[#ddb7ff]"
      />

      <GradientLogo />

      <TouchableOpacity>
        <MaterialIcons name="notifications-none" size={26} color="#ddb7ff" />
      </TouchableOpacity>
    </View>
  );
}
