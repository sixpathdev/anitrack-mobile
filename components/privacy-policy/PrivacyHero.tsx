import { ImageBackground, Text, View } from "react-native";
import PrivacyBadge from "./PrivacyBadge";

export default function PrivacyHero() {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      }}
      imageStyle={{
        borderRadius: 18,
      }}
      className="h-52 overflow-hidden rounded-2xl justify-end mb-12"
    >
      <View className="absolute inset-0 bg-[#0b1326]/70" />

      <View className="p-5">
        <PrivacyBadge />

        <Text className="text-white text-2xl font-quicksand-bold mt-5">
          Your Privacy Matters
        </Text>

        <Text className="text-[#cfc2d6] mt-2 leading-6">
          We believe your anime journey belongs only to you. Everything we do is
          designed to protect your information while giving you the best
          tracking experience.
        </Text>
      </View>
    </ImageBackground>
  );
}
