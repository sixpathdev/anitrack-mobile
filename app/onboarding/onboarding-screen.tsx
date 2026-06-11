import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { completeOnboarding } from "@/common/onboarding";
import { DiscoverAnimeSlide } from "./components/DiscoverAnimeSlide";
import { TrackProgressSlide } from "./components/TrackProgressSlide";
import { StayUpdatedSlide } from "./components/StayUpdatedSlide";
import { ConnectShareSlide } from "./components/ConnectShareSlide";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import SlideThree from "./components/SlideThree";

const { height } = Dimensions.get("window");

const ONBOARDING_SLIDES = [
  {
    id: 1,
    component: SlideOne,
  },
  {
    id: 2,
    component: SlideTwo,
  },
  {
    id: 3,
    component: SlideThree,
  },
];

export default function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const scrollViewRef = React.useRef<ScrollView>(null);

  const handleSkip = async () => {
    try {
      setIsLoading(true);
      await completeOnboarding();
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Error completing onboarding:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetStarted = async () => {
    try {
      setIsLoading(true);
      await completeOnboarding();
      router.replace("/(tabs)");
    } catch (error) {
      console.error("Error completing onboarding:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const slide = ONBOARDING_SLIDES[currentSlide];
  const isLastSlide = currentSlide === ONBOARDING_SLIDES.length - 1;

  return (
    <View className="flex-1 bg-[#0b1326]">
      <StatusBar barStyle="light-content" />

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={(e) => {
          const offset = e.nativeEvent.contentOffset.x;
          const slideIndex = Math.round(offset / Dimensions.get("window").width);
          setCurrentSlide(slideIndex);
        }}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        className="flex-1"
      >
        {ONBOARDING_SLIDES.map((item) => {
          const SlideComponent = item.component;
          return (
            <SlideComponent key={item.id} />
          );
        })}
      </ScrollView>



      {/* Bottom Section */}
      {/* <LinearGradient
        colors={["rgba(11,19,38,0)", "rgba(11,19,38,0.9)", "#0b1326"]}
        className="px-6 pb-8 pt-8"
      > */}
        {/* Dots Indicator */}
        {/* <View className="mb-8 flex-row items-center justify-center gap-2">
          {ONBOARDING_SLIDES.map((_, index) => (
            <TouchableOpacity
              key={index}
              className={`rounded-full ${
                index === currentSlide ? "bg-[#ddb7ff]" : "bg-[#2d3449]"
              }`}
              style={{
                width: index === currentSlide ? 32 : 8,
                height: 8,
              }}
            />
          ))}
        </View> */}

        {/* Buttons */}
        {/* {isLastSlide ? (
          <TouchableOpacity
            onPress={handleGetStarted}
            disabled={isLoading}
            className="rounded-[12px] bg-gradient-to-r from-[#ddb7ff] to-[#0566d9] px-8 py-4"
            style={{
              shadowColor: "#ddb7ff",
              shadowOpacity: 0.3,
              shadowRadius: 15,
              shadowOffset: {
                width: 0,
                height: 8,
              },
              elevation: 8,
            }}
          >
            <Text className="text-center text-[16px] font-bold text-[#0b1326]">
              {isLoading ? "Getting Started..." : "Get Started"}
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="flex-row gap-3">
            <TouchableOpacity
              onPress={handleSkip}
              disabled={isLoading}
              className="flex-1 rounded-[12px] border-2 border-[#2d3449] px-8 py-4"
            >
              <Text className="text-center text-[16px] font-semibold text-[#988d9f]">
                Skip
              </Text>
            </TouchableOpacity>

            <View
              className="flex-1 rounded-[12px] bg-gradient-to-r from-[#ddb7ff] to-[#0566d9] px-8 py-4"
              style={{
                shadowColor: "#ddb7ff",
                shadowOpacity: 0.3,
                shadowRadius: 15,
                shadowOffset: {
                  width: 0,
                  height: 8,
                },
                elevation: 8,
              }}
            >
              <Text className="text-center text-[16px] font-semibold text-[#0b1326]">
                Swipe for more →
              </Text>
            </View>
          </View>
        )} */}
      {/* </LinearGradient> */}
    </View>
  );
}
