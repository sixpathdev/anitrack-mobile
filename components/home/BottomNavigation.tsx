import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function BottomNavigation() {
  return (
    <View className="absolute bottom-8 left-5 right-5">
      <View className="flex-row items-center justify-around rounded-full border border-white/10 bg-[#171f33]/90 py-3">
        <TouchableOpacity className="h-12 w-12 items-center justify-center rounded-full bg-[#ddb7ff]">
          <MaterialIcons name="home" size={24} color="#490080" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons name="search" size={24} color="#cfc2d6" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons name="calendar-month" size={24} color="#cfc2d6" />
        </TouchableOpacity>

        <TouchableOpacity>
          <MaterialIcons name="person" size={24} color="#cfc2d6" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
