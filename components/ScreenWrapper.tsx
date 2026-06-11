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

interface ScreenWrapperProps {
  children: React.ReactNode;
  bg?: string;
  style?: StyleProp<ViewStyle>;
  className?: string;
  scroll?: boolean;
}

export default function ScreenWrapper({
  children,
  bg = "",
  style,
  className,
  scroll = true,
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
      edges={["top", "left", "right", "bottom"]}
    >
      <StatusBar style="light" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {scroll ? (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {children}
            </ScrollView>
          </TouchableWithoutFeedback>
        ) : (
          <View style={{ flex: 1 }}>{children}</View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
