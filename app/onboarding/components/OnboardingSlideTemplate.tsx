import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

interface OnboardingSlideProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const OnboardingSlideTemplate: React.FC<OnboardingSlideProps> = ({
  icon,
  title,
  description,
  color,
}) => {
  return (
    <View
      className="w-full flex-1 items-center justify-center px-6"
      style={{ width: Dimensions.get("window").width }}
    >
      {/* Top Glow */}
      <View
        className="absolute -top-28 -right-28 h-[300px] w-[300px] rounded-full"
        style={{
          backgroundColor: "rgba(221,183,255,0.08)",
        }}
      />

      {/* Bottom Glow */}
      <View
        className="absolute -bottom-28 -left-28 h-[300px] w-[300px] rounded-full"
        style={{
          backgroundColor: "rgba(5,102,217,0.08)",
        }}
      />

      {/* Icon Circle */}
      <LinearGradient
        colors={[color, "#0566d9"]}
        className="mb-12 h-[120px] w-[120px] rounded-full p-[2px]"
        style={{
          shadowColor: color,
          shadowOpacity: 0.4,
          shadowRadius: 30,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          elevation: 12,
        }}
      >
        <View className="flex-1 items-center justify-center overflow-hidden rounded-full bg-[#171f33]">
          <MaterialIcons name={icon as any} size={60} color={color} />
        </View>
      </LinearGradient>

      {/* Title */}
      <Text
        className="mb-4 text-center text-[36px] font-extrabold text-[#ddb7ff]"
        style={{
          textShadowColor: "rgba(221,183,255,0.3)",
          textShadowOffset: {
            width: 0,
            height: 0,
          },
          textShadowRadius: 15,
        }}
      >
        {title}
      </Text>

      {/* Description */}
      <Text className="text-center text-[16px] text-[#988d9f]">
        {description}
      </Text>
    </View>
  );
};
