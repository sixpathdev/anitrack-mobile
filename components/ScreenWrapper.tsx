import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface ScreenWrapperProps {
  children: React.ReactNode;
  bg?: string;
  style?: StyleProp<ViewStyle>;
  className?: string;
  scroll?: boolean;
  includeTopSafeArea?: boolean;
}

export default function ScreenWrapper({
  children,
  bg = "",
  style,
  className,
  scroll = true,
  includeTopSafeArea = true,
}: ScreenWrapperProps) {
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          paddingHorizontal: "4%",
          backgroundColor: bg,
        },
        style,
      ]}
      className={className}
      edges={
        includeTopSafeArea
          ? ["top", "left", "right", "bottom"]
          : ["left", "right", "bottom"]
      }
    >
      <StatusBar style="light" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {scroll ? (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAwareScrollView
              enableOnAndroid
              extraScrollHeight={80}
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {children}
            </KeyboardAwareScrollView>
          </TouchableWithoutFeedback>
        ) : (
          <View style={{ flex: 1 }}>{children}</View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
