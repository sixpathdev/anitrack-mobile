import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  title: string;
  image: string;
  time: string;
  badge: string;
  badgeType: "secondary" | "tertiary";
}

export default function ScheduleCard({
  title,
  image,
  time,
  badge,
  badgeType,
}: Props) {
  return (
    <View className="w-[48%] h-72 rounded-2xl overflow-hidden mb-4">
      <ImageBackground
        source={{ uri: image }}
        className="flex-1"
        resizeMode="cover"
      >
        <LinearGradient
          colors={["transparent", "rgba(11,19,38,0.8)", "rgba(11,19,38,1)"]}
          className="flex-1 justify-end p-3"
        >
          <View
            className={`self-start px-2 py-1 rounded mb-2 ${
              badgeType === "secondary" ? "bg-[#0566d9]" : "bg-[#ec6a06]"
            }`}
          >
            <Text className="text-white text-[10px] font-bold">{badge}</Text>
          </View>

          <Text numberOfLines={2} className="text-white font-bold text-base">
            {title}
          </Text>

          <View className="flex-row items-center mt-2">
            <Ionicons name="time-outline" size={14} color="#ddb7ff" />
            <Text className="text-[#ddb7ff] text-xs ml-1">{time}</Text>
          </View>

          <TouchableOpacity className="mt-3 bg-white/10 border border-white/20 rounded-xl py-3 flex-row justify-center items-center">
            <Ionicons name="notifications-outline" size={16} color="white" />

            <Text className="text-white font-bold ml-2">Remind Me</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
