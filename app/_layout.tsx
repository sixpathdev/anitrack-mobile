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
import * as Font from "expo-font";

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
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const { user } = useSelector((state) => state.auth);

  // Load custom fonts
  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "Quicksand-Light": require("@/assets/fonts/Quicksand-Light.ttf"),
          "Quicksand-Regular": require("@/assets/fonts/Quicksand-Regular.ttf"),
          "Quicksand-Medium": require("@/assets/fonts/Quicksand-Medium.ttf"),
          "Quicksand-Bold": require("@/assets/fonts/Quicksand-Bold.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
        setFontsLoaded(true); // Continue even if fonts fail to load
      }
    };
    loadFonts();
  }, []);

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

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

  // useEffect(() => {
  //   const setupToken = async () => {
  //     if (!isLoading && isAuthenticated && token) {
  //       await setAxiosAuthToken(token);
  //     }
  //   };
  //   setupToken();
  // }, [isAuthenticated, isLoading, token]);

  // useEffect(() => {
  //   if (!isLayoutMounted || isLoading) return;
  //   router.replace("/onboarding");
  // }, [
  //   isLayoutMounted,
  //   isAuthenticated,
  //   isLoading,
  //   segments,
  //   onboardingCompleted,
  //   user,
  // ]);

  return (
    <>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          // headerStyle: { backgroundColor: "#0b1326" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "700",
            color: "#fff",
          },
        }}
      >
        {/* <Stack.Screen name="onboarding" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="auth/login" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="auth/signup" options={{ title: "Sign Up" }} /> */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(protected)" /> */}
      </Stack>

      {!isLayoutMounted && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <ActivityIndicator size="large" color="#015788" />
        </View>
      )}
    </>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ReduxProvider>
        <PaperProvider>
          <InitialLayout />
          <StatusBar style="dark" />
          <Toaster />
        </PaperProvider>
      </ReduxProvider>
    </GestureHandlerRootView>
  );
}
