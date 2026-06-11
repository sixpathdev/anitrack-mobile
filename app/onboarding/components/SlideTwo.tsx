import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function SlideTwo() {
  return (
    <SafeAreaView className="flex-1 bg-[#0b1326] overflow-hidden">
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk8rhhMlPongJu8nYdVuvCJNdf-DUIUglntjFlqhne6VOAOwti1tVxmThvD1jbe5cMLUfOOYxn7VXzaqyv0oXrrUgMLjqMc6JRUIysd3mhM18aYtk4peIaV8uixaBJvTmhvWSDmts1lq1imO8cXEPr-1KMcHQ6U3qBOZs8TM-jDXTKGZi79j3Q53ETn4Taza62OTWnD_RBsasQal71NwcnFMc2kHNdVwhQk8Wtb9eGPbYL6y9eI-qzZ6aLID4A--Xgv0n-rI1yefkF",
        }}
        resizeMode="cover"
        blurRadius={30}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <View className="flex-1 bg-[#0b1326]/80" />
      </ImageBackground>

      <View style={s.header} className="mt-2 mb-16 px-4">
        <Text style={s.logo}>AniTrack</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Text style={s.skip} className="font-quicksand-bold">
            SKIP
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center px-4">
        <View
          style={{
            width: width - 32,
            maxWidth: 380,
          }}
          className="items-center"
        >
          <View
            className="w-full overflow-hidden rounded-[28px] border border-white/10"
            style={{
              shadowColor: "#ddb7ff",
              shadowOpacity: 0.25,
              shadowRadius: 25,
              shadowOffset: { width: 0, height: 10 },
              elevation: 10,
            }}
          >
            <BlurView intensity={45} tint="dark">
              <View className="bg-[#1e293b]/45 p-4">
                <LinearGradient
                  colors={[
                    "transparent",
                    "rgba(255,255,255,0.15)",
                    "transparent",
                  ]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                  }}
                />

                <View className="flex-row items-center justify-between">
                  <View className="flex-1 flex-row items-center pr-2">
                    <LinearGradient
                      colors={["#ddb7ff", "#adc6ff"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      className="h-10 w-10 items-center justify-center"
                    >
                      <MaterialIcons
                        name="notifications-active"
                        size={20}
                        color="#400071"
                      />
                    </LinearGradient>

                    <Text
                      numberOfLines={1}
                      ellipsizeMode="tail"
                      className="ml-3 flex-1 text-[11px] font-semibold tracking-[1px] text-[#cfc2d6]"
                    >
                      ANITRACK • NOW
                    </Text>
                  </View>

                  <MaterialIcons name="more-horiz" size={20} color="#cfc2d6" />
                </View>

                <View className="mt-5">
                  <Text className="text-[20px] font-bold text-[#dae2fd]">
                    New Episode Airing!
                  </Text>

                  <Text className="mt-2 text-[14px] leading-6 text-[#cfc2d6]">
                    Void Stalker Season 2, Episode 05 is now available for
                    streaming. Stay ahead of the spoilers!
                  </Text>
                </View>

                {/* Bottom Actions */}
                <View className="mt-6 flex-row items-center">
                  {/* Thumbnail */}
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7C5MUBfCbN1FtTr1qlpUxg6V4Iz4h3v2WgN5Sgvv07fxu5tnv6wXRg2LUPyjK8PVHG8FHKub_2dZfB8cWSzD06NiueUI-Q-KGuzXCP1Sdvg1JYT_mbzNQOdAPwykPJDpUwK8OGySqHPGUddAFmnOVICpbCzMxGWysFlpdqbAeSVJT6k6jzOSR111POgtqRSWUfHlo34mIOKDU2gGXtbNhWi9j9XIqe86-0Ru2P3_rWQ0SU_jXkOIblP_8OgcDpiko3zIw4H-Mw0aQ",
                    }}
                    resizeMode="cover"
                    style={{
                      width: 60,
                      height: 80,
                      borderRadius: 12,
                    }}
                  />

                  {/* Button */}
                  <View className="flex-1 ml-3 min-w-0">
                    <TouchableOpacity
                      activeOpacity={0.85}
                      className="overflow-hidden rounded-2xl border border-white/10"
                    >
                      <BlurView intensity={25} tint="dark">
                        <View className="h-12 flex-row items-center justify-center bg-white/10 px-2">
                          <MaterialIcons
                            name="alarm"
                            size={18}
                            color="#ddb7ff"
                          />

                          <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            className="ml-2 text-[11px] font-bold tracking-[1px] text-[#ddb7ff]"
                          >
                            REMIND ME
                          </Text>
                        </View>
                      </BlurView>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </BlurView>
          </View>

          <View className="mt-12 px-2">
            <Text className="text-center text-[28px] font-quicksand-bold leading-[36px] text-[#dae2fd]">
              Never Miss a Release
            </Text>
            <Text className="mt-2 text-center text-[14px] font-quicksand-medium leading-6 text-[#cfc2d6]">
              Get instant alerts when your favorite simulcasts go live. Your
              watchlist, synchronized with the world.
            </Text>
          </View>
        </View>

        <View className="w-full items-center absolute bottom-10 py-2 px-4">
          <View className="mb-8 flex-row items-center gap-2">
            <View className="h-2 w-2 rounded-full bg-[#2d3449]" />
            <View
              className="h-2 w-6 rounded-full bg-[#ddb7ff]"
              style={{
                shadowColor: "#ddb7ff",
                shadowOpacity: 0.8,
                shadowRadius: 8,
              }}
            />
            <View className="h-2 w-2 rounded-full bg-[#2d3449]" />
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
              <Text className="text-[18px] font-bold text-[#400071]">Next</Text>
              <MaterialIcons
                name="arrow-forward"
                size={22}
                color="#400071"
                style={{ marginLeft: 8 }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
  },
  logo: {
    fontSize: 24,
    fontWeight: "800",
    color: "#ddb7ff",
    letterSpacing: -0.3,
  },
  skip: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#cfc2d6",
  },
});
