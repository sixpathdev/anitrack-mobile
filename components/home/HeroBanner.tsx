import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HeroBanner() {
  const router = useRouter()


  return (
    <View className="mt-6 overflow-hidden rounded-3xl bg-red-50">
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
        }}
        className="h-56"
      >
        <LinearGradient
          colors={["transparent", "#0b1326"]}
          className="flex-1 justify-end p-4"
        >
          <View className="mb-2 self-start rounded-full bg-[#ddb7ff]/20 px-3 py-1">
            <Text className="text-xs font-bold text-[#ddb7ff]">
              TRENDING NOW
            </Text>
          </View>

          <Text className="mb-3 text-3xl font-bold text-white">
            Cyber Samurai: 2099
          </Text>

          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/anime/12345")} className="self-start overflow-hidden rounded-xl">
            <LinearGradient
              colors={["#ddb7ff", "#842bd2"]}
              className="flex-row items-center px-4 py-3"
            >
              <MaterialIcons name="play-arrow" size={20} color="white" />
              <Text className="ml-2 font-semibold text-white">Watch Now</Text>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
