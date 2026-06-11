import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface Props {
  id?: number;
  title: string;
  episode: string;
  progress: number;
  image: string;
}

export default function ContinueWatchingCard({
  id,
  title,
  episode,
  progress,
  image,
}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => console.log(id)} className="mr-4 w-64 overflow-hidden rounded-2xl bg-[#171f33]">
      <Image source={{ uri: image }} className="h-36 w-full" />

      <View className="h-1 bg-[#2d3449]">
        <View
          className="h-full bg-[#ec6a06]"
          style={{ width: `${progress}%` }}
        />
      </View>

      <View className="p-3">
        <Text numberOfLines={1} className="text-base font-semibold text-white">
          {title}
        </Text>

        <Text className="mt-1 text-sm text-[#cfc2d6]">{episode}</Text>
      </View>
    </TouchableOpacity>
  );
}
