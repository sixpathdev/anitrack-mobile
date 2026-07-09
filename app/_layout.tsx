import { ReduxProvider } from "@/components/ReduxProvider";
import "@/global.css";
import { hasCompletedOnboarding } from "@/common/onboarding";
import { setAxiosAuthToken } from "@/services/axios";
import { AppDispatch, RootState } from "@/store";
import { loadUser } from "@/store/slices/authSlice";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "sonner-native";
import { useFonts } from "expo-font";

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";

import {
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans";

import { Outfit_700Bold, Outfit_800ExtraBold } from "@expo-google-fonts/outfit";

SplashScreen.setOptions({
  duration: 5000,
  fade: true,
});

function InitialLayout() {
  const { isAuthenticated, isLoading, token } = useSelector(
    (state: RootState) => state.auth,
  );

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const segments = useSegments();

  const [isLayoutMounted, setIsLayoutMounted] = useState(false);

  const [onboardingCompleted, setOnboardingCompleted] = useState<
    boolean | null
  >(false);

  const { user } = useSelector((state: RootState) => state.auth);

  const [fontsLoaded] = useFonts({
    // Inter
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,

    // Plus Jakarta Sans
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,

    // Outfit
    Outfit_700Bold,
    Outfit_800ExtraBold,
  });

  useEffect(() => {
    setIsLayoutMounted(true);
  }, []);

  useEffect(() => {
    const checkOnboarding = async () => {
      const completed = await hasCompletedOnboarding();
      setOnboardingCompleted(completed);
    };

    checkOnboarding();
  }, []);

  // Uncomment when ready
  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

  // useEffect(() => {
  //   const setupToken = async () => {
  //     if (!isLoading && isAuthenticated && token) {
  //       await setAxiosAuthToken(token);
  //     }
  //   };
  //
  //   setupToken();
  // }, [isAuthenticated, isLoading, token]);

  // useEffect(() => {
  //   if (!isLayoutMounted || isLoading) return;
  //
  //   router.replace("/onboarding");
  // }, [
  //   isLayoutMounted,
  //   isAuthenticated,
  //   isLoading,
  //   segments,
  //   onboardingCompleted,
  //   user,
  // ]);

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#0b1326",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#8B5CF6" />
      </View>
    );
  }

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#0b1326" }}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#0b1326",
            },
            headerTitleStyle: {
              fontFamily: "PlusJakartaSans_700Bold",
              color: "#fff",
              fontSize: 20,
            },
          }}
        >
          <Stack.Screen name="onboarding" options={{ headerShown: false }} />

          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          <Stack.Screen
            name="(protected)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>

      {!isLayoutMounted && (
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0b1326",
          }}
        >
          <ActivityIndicator size="large" color="#8B5CF6" />
        </View>
      )}
    </>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: "#0b1326",
      }}
    >
      <ReduxProvider>
        <PaperProvider>
          <InitialLayout />
          <StatusBar style="light" />
          <Toaster />
        </PaperProvider>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
