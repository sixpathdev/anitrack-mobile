import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

export default function GradientLogo() {
  return (
    <MaskedView
      maskElement={
        <Text
          style={{
            fontSize: 28,
            fontWeight: "800",
            color: "black",
          }}
        >
          AniTrack
        </Text>
      }
    >
      <LinearGradient
        colors={["#ddb7ff", "#adc6ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text
          style={{
            opacity: 0,
            fontSize: 28,
            fontWeight: "800",
          }}
        >
          AniTrack
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}
