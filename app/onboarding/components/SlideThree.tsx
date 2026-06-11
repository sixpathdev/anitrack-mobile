import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function SlideThree() {
  return (
    <SafeAreaView className="flex-1 overflow-hidden bg-[#0b1326]">
      <StatusBar barStyle="light-content" />

      <View className="flex-1 items-center justify-start mt-12 px-4">
        <View className="absolute inset-0 overflow-hidden">
          <View
            style={{
              position: "absolute",
              top: height * 0.18,
              left: width * 0.2,
              width: 280,
              height: 280,
              borderRadius: 999,
              backgroundColor: "rgba(221,183,255,0.12)",
            }}
          />

          <View
            style={{
              position: "absolute",
              bottom: height * 0.15,
              right: -80,
              width: 240,
              height: 240,
              borderRadius: 999,
              backgroundColor: "rgba(173,198,255,0.10)",
            }}
          />
        </View>

        <View className="w-full max-w-[380px] items-center">
          {/* Card Stack */}
          <View
            style={{
              width: width * 0.72,
              maxWidth: 280,
              aspectRatio: 2 / 3,
            }}
            className="relative mb-12"
          >
            {/* Left Stack */}
            <View
              className="absolute inset-0 rounded-3xl border border-white/10"
              style={{
                transform: [{ translateX: -14 }, { rotate: "4deg" }],
                backgroundColor: "rgba(30,41,59,0.45)",
              }}
            />

            {/* Right Stack */}
            <View
              className="absolute inset-0 rounded-3xl border border-white/10"
              style={{
                transform: [{ translateX: 14 }, { rotate: "-4deg" }],
                backgroundColor: "rgba(30,41,59,0.45)",
              }}
            />

            {/* Main Card */}
            <View
              className="overflow-hidden rounded-3xl border border-white/10"
              style={{
                flex: 1,
                shadowColor: "#ddb7ff",
                shadowOpacity: 0.35,
                shadowRadius: 20,
                shadowOffset: { width: 0, height: 0 },
                elevation: 10,
              }}
            >
              <BlurView intensity={45} tint="dark" className="flex-1">
                <Image
                  source={{
                    uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuADzHji2cPqLpffpaPK8-NnzwzNu5uDYXAdXU5wj_R87r7JvhvftrnFX-ixEbrcr5cAsC7CBmLWndI2hIsNuVwppJoe_X5YhFuVR7_Lpw7CK5vKBsgFLteCPU069pD2R_cgzfrz6TOHKBc5a5cOqZbCbG4vrxVa9EPhZS-DXPvEUrEXJ-q3_2wvnJAvn5urXNWIT6JgIg8x66sAngni8BhhroGD7dH0xJ_hx-MB9gI9UH6UnssrTfS4M056-FMEoZKBm3fRuL5M7PB-",
                  }}
                  resizeMode="cover"
                  className="absolute inset-0 h-full w-full"
                />

                {/* Overlay */}
                <LinearGradient
                  colors={["transparent", "rgba(11,19,38,0.2)", "#0b1326"]}
                  locations={[0, 0.55, 1]}
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                />

                {/* Bottom Content */}
                <View className="absolute bottom-0 left-0 right-0 p-4">
                  <View className="mb-2 flex-row items-center">
                    <MaterialIcons name="star" size={18} color="#ddb7ff" />

                    <Text className="ml-1 text-[11px] font-bold uppercase tracking-[1px] text-[#ddb7ff]">
                      4.9 Rating
                    </Text>
                  </View>

                  <Text className="text-[22px] font-bold text-[#dae2fd]">
                    Aether Pulse
                  </Text>

                  <View className="mt-3 flex-row flex-wrap">
                    <View className="mr-2 rounded-md border border-[#ddb7ff]/30 bg-[#ddb7ff]/15 px-2 py-1">
                      <Text className="text-[10px] font-bold uppercase text-[#ddb7ff]">
                        Cyberpunk
                      </Text>
                    </View>

                    <View className="rounded-md border border-[#adc6ff]/30 bg-[#adc6ff]/15 px-2 py-1">
                      <Text className="text-[10px] font-bold uppercase text-[#adc6ff]">
                        Seinen
                      </Text>
                    </View>
                  </View>
                </View>
              </BlurView>
            </View>

            {/* Match Pill */}
            <View
              className="absolute -right-3 -top-3 flex-row items-center rounded-full border border-white/20 px-4 py-2"
              style={{
                backgroundColor: "#ec6a06",
              }}
            >
              <MaterialIcons name="auto-awesome" size={16} color="#4a1c00" />

              <Text className="ml-1 text-[11px] font-bold uppercase text-[#4a1c00]">
                Match 98%
              </Text>
            </View>
          </View>

          {/* Text Content */}
          <View className="items-center px-3">
            <Text className="text-center text-[30px] font-bold leading-[38px] text-[#dae2fd]">
              Discover Your Next Favorite
            </Text>

            <Text className="mt-4 text-center text-[15px] leading-7 text-[#cfc2d6]">
              Our cinematic engine learns your taste to provide high-fidelity
              recommendations tailored to your soul.
            </Text>
          </View>
        </View>
      </View>

      <View className="w-full items-center absolute bottom-10 py-2 px-4">
        <View className="mb-8 flex-row items-center gap-2">
          <View className="h-2 w-2 rounded-full bg-[#2d3449]" />
          <View className="h-2 w-2 rounded-full bg-[#2d3449]" />
          <View
            className="h-2 w-6 rounded-full bg-[#ddb7ff]"
            style={{
              shadowColor: "#ddb7ff",
              shadowOpacity: 0.8,
              shadowRadius: 8,
            }}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          className="w-full overflow-hidden rounded-full"
        >
          <LinearGradient
            colors={["#b76dff", "#adc6ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="h-14 flex-row items-center justify-center rounded-full"
          >
            <Text className="text-[18px] font-bold text-[#400071]">Finish</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
