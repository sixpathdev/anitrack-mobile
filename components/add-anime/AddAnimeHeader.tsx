import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function AddAnimeHeader() {
  return (
    <View className="flex-row justify-between items-center py-4">
      <View className="flex-row items-center">
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#ddb7ff" />
        </Pressable>

        <Text className="ml-4 text-2xl font-bold text-[#ddb7ff]">
          Add Anime
        </Text>
      </View>

      <Ionicons name="ellipsis-vertical" size={22} color="#ddb7ff" />
    </View>
  );
}
