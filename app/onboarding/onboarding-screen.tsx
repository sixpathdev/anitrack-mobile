import React, { useState } from "react";
import { View, ScrollView, StatusBar, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { completeOnboarding } from "@/common/onboarding";
import SlideOne from "./components/SlideOne";
import SlideTwo from "./components/SlideTwo";
import SlideThree from "./components/SlideThree";

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
      router.replace("/auth/login");
      // router.replace("/(tabs)");
    } catch (error) {
      console.error("Error completing onboarding:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const slide = ONBOARDING_SLIDES[currentSlide];
  // const isLastSlide = currentSlide === ONBOARDING_SLIDES.length - 1;

  const handleNextSlide = () => {
    if (scrollViewRef.current) {
      const nextSlideIndex = currentSlide + 1;
      if (nextSlideIndex < ONBOARDING_SLIDES.length) {
        scrollViewRef.current.scrollTo({
          x: nextSlideIndex * Dimensions.get("window").width,
          animated: true,
        });
      }
    }
  };

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
          const slideIndex = Math.round(
            offset / Dimensions.get("window").width,
          );
          setCurrentSlide(slideIndex);
        }}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        className="flex-1"
      >
        {ONBOARDING_SLIDES.map((item) => {
          const SlideComponent = item.component;
          return (
            <SlideComponent
              key={item.id}
              onSkip={handleSkip}
              onNextSlide={handleNextSlide}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
