import React from "react";
import { View, Text, Image } from "react-native";

interface Props {
  title: string;
  time: string;
  image: string;
}

export default function ReleasePoster({ title, time, image }: Props) {
  return (
    <View className="mr-4 w-[140px]">
      <View className="overflow-hidden rounded-2xl">
        <Image source={{ uri: image }} className="h-52 w-full" />

        <View className="absolute right-2 top-2 rounded-lg bg-black/70 px-2 py-1">
          <Text className="text-[10px] font-bold text-[#ddb7ff]">{time}</Text>
        </View>
      </View>

      <Text
        numberOfLines={1}
        className="mt-2 text-center font-medium text-white"
      >
        {title}
      </Text>
    </View>
  );
}
