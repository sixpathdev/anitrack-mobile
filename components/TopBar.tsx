import React from "react";
import { View, Image, TouchableOpacity, Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import GradientLogo from "./home/GradientLogo";
import { useRouter } from "expo-router";

export default function TopBar() {
  const router = useRouter();

  const notificationCount = 29;
  return (
    <View className="flex-row items-center justify-between py-4">
      <Pressable onPress={() => router.push("/profile/edit")}>
        <Image
          source={{
            uri: "https://cdn.myanimelist.net/images/anime/1170/124312l.jpg",
          }}
          className="h-10 w-10 rounded-full border border-[#ddb7ff]"
        />
      </Pressable>

      {/* <GradientLogo /> */}

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => router.push("/notifications")}
        className="relative"
      >
        <MaterialIcons name="notifications-none" size={32} color="#ddb7ff" />
        {notificationCount > 0 && (
          <View className="absolute -right-1 -top-1 min-h-5 min-w-5 rounded-full bg-red-500 px-1.5 items-center justify-center">
            <Text className="text-[10px] font-bold text-white">
              {notificationCount > 99 ? "99+" : notificationCount}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}
