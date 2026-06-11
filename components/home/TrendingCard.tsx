import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  title: string;
  genres: string;
  rating: string;
  image: string;
}

export default function TrendingCard({ title, genres, rating, image }: Props) {
  return (
    <View className="mb-3 flex-row rounded-2xl bg-[#171f33] p-3">
      <Image source={{ uri: image }} className="h-28 w-20 rounded-xl" />

      <View className="ml-3 flex-1 justify-center">
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-white">{title}</Text>

          <View className="flex-row items-center">
            <MaterialIcons name="star" size={14} color="#ffb690" />

            <Text className="ml-1 text-xs text-[#ffb690]">{rating}</Text>
          </View>
        </View>

        <Text className="mt-2 text-sm text-[#cfc2d6]">{genres}</Text>

        <View className="mt-3 self-start rounded-md bg-[#31394d] px-2 py-1">
          <Text className="text-[10px] text-white">NEW SEASON</Text>
        </View>
      </View>
    </View>
  );
}
