import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Animated,
  Easing,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const progress = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: false,
        }),

        Animated.timing(progress, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/onboarding/onboarding-screen");
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  const animatedWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View className="flex-1 bg-[#0b1326]">
      <StatusBar barStyle="light-content" />

      {/* Background */}
      <ImageBackground
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK5GwudJwOc3hIyR1m8rAZF5p3Cb9ZqbCzu7TXoqJcNSvzMEcJLiav4fShMpf0Ir9lg590zJM6WMI2DQo9TPWuWcnYSQWUB0HhzxR-XK3XhpcNz7eNOWFC0ZSdAD87qJa5SyjWTuMtmVHIdVD0pjkUWqIRSDNbBGASJZmfr5bse-JtsML4nTlkZCkMnMD3Buzp-e6K8i1ZyB25tc0QoXvo0yQaTk2iwS64D_Veica-_doo4-6xavsQptHDSQ9VSiggd6zPeI8Em8vv",
        }}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.2,
        }}
        className="flex-1 items-center justify-center"
      >
        {/* Overlay */}
        <LinearGradient
          colors={["rgba(11,19,38,0.4)", "#0b1326", "#0b1326"]}
          className="absolute inset-0"
        />

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

        {/* Main Content */}
        <View className="z-10 items-center px-5">
          {/* Logo */}
          <LinearGradient
            colors={["#ddb7ff", "#0566d9"]}
            className="mb-8 h-[110px] w-[110px] rounded-[28px] p-[2px]"
            style={{
              shadowColor: "#ddb7ff",
              shadowOpacity: 0.4,
              shadowRadius: 30,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              elevation: 12,
            }}
          >
            <View className="flex-1 items-center justify-center overflow-hidden rounded-[26px] bg-[#171f33]">
              <MaterialIcons
                name="play-circle-filled"
                size={52}
                color="#ddb7ff"
              />

              <View
                className="absolute inset-0"
                style={{
                  backgroundColor: "rgba(221,183,255,0.05)",
                }}
              />
            </View>
          </LinearGradient>

          {/* Title */}
          <Text
            className="mb-5 text-[48px] font-extrabold tracking-[-1.5px] text-[#ddb7ff]"
            style={{
              textShadowColor: "rgba(221,183,255,0.5)",
              textShadowOffset: {
                width: 0,
                height: 0,
              },
              textShadowRadius: 20,
            }}
          >
            AniTrack
          </Text>

          {/* Subtitle */}
          <Text className="mb-10 text-[12px] font-semibold uppercase tracking-[5px] text-[#cfc2d6]">
            Your Ultimate Anime Companion
          </Text>

          {/* Loading */}
          <View className="items-center">
            {/* Progress Track */}
            <View className="mb-4 h-[4px] w-[190px] overflow-hidden rounded-full bg-[#2d3449]">
              {/* Animated Fill */}
              <Animated.View
                style={{
                  width: animatedWidth,
                  height: "100%",
                  backgroundColor: "#ddb7ff",
                  borderRadius: 999,

                  shadowColor: "#ddb7ff",
                  shadowOpacity: 1,
                  shadowRadius: 10,
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                }}
              />
            </View>

            {/* Loading Text */}
            <Text className="text-[14px] text-[#988d9f]/70">
              Initializing your library...
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
