import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const C = {
  surface: "#0b1326",
  surfaceContainerLowest: "#060e20",
  surfaceContainerHighest: "#2d3449",
  onSurface: "#dae2fd",
  onSurfaceVariant: "#cfc2d6",
  primary: "#ddb7ff",
  secondary: "#adc6ff",
  inversePrimary: "#842bd2",
  onPrimary: "#490080",
};

export default function AniTrackOnboardingScreen({
  onNextSlide,
  onSkip,
}: {
  onNextSlide: () => void;
  onSkip: () => void;
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const scaleAnim = useRef(new Animated.Value(0.88)).current;
  const glowAnim = useRef(new Animated.Value(0.45)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 650,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 55,
        friction: 9,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 45,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 900,
      delay: 420,
      useNativeDriver: false,
    }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 1700,
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0.45,
          duration: 1700,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "50%"],
  });

  return (
    <SafeAreaView style={s.root}>
      <StatusBar barStyle="light-content" backgroundColor={C.surface} />
      <View style={s.ambientBlob} pointerEvents="none" />
      <View className="flex-1 items-center">
        <View>
          <View style={s.header} className="mb-8 px-4">
            <Text style={s.logo} className="font-outfit-bold">
              AniTrack
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              onPress={onSkip}
            >
              <Text style={s.skip} className="font-subheading">
                SKIP
              </Text>
            </TouchableOpacity>
          </View>
          <Animated.View
            style={[
              s.content,
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
            ]}
            className="gap-12"
          >
            <Animated.View
              style={[s.glassCard, { transform: [{ scale: scaleAnim }] }]}
            >
              <BlurView
                intensity={36}
                tint="dark"
                style={StyleSheet.absoluteFill}
              />

              <View style={s.glassInner}>
                {/* Poster + neon ring */}
                <View style={s.posterWrapper}>
                  <Animated.View style={[s.neonRing, { opacity: glowAnim }]} />
                  <Image
                    source={{
                      uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDi8JGX18HSiNDxcatW8o1qH76cPGjmp_AUEtF0Ko3uDl3Suiam7kSpojVZDgNwVmrNIZ5h6ZqJPj97vqpBICzXjcf1LNLEm-oC-s3Rw0_HcyEFPIOs_akgdATllDYjoWk8OzUzdolS0VkP8Sk48fGUlHwUdDOUy7UhkoSLf18Wz30rWb47Jb7tvHmJv3XrsfU2FZA-HFvNU8oL0PGueJ2zUBtvMDoZVRLo9ts_zPgww0I-sHQ6K4uK3Pz4Pd5V15bOTLFghbiaY34h",
                    }}
                    style={s.posterImage}
                    resizeMode="cover"
                  />
                </View>

                {/* Label row */}
                <View style={s.infoRow}>
                  <Text style={s.labelCaps} className="font-subheading">
                    Currently Watching
                  </Text>
                  <Text style={s.epLabel} className="font-subheading">
                    Ep 12/24
                  </Text>
                </View>

                {/* Progress bar */}
                <View style={s.progressTrack}>
                  <Animated.View
                    style={{ width: progressWidth, height: "100%" }}
                  >
                    <LinearGradient
                      colors={[C.primary, C.secondary]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      style={s.progressFill}
                    />
                  </Animated.View>
                </View>

                <TouchableOpacity
                  activeOpacity={0.75}
                  className="w-[56px] h-[56px] rounded-full bg-[rgba(221,183,255,0.13)] border border-[rgba(221,183,255,0.28)] items-center justify-center mt-1 shadow-[0_0_14px_rgba(221,183,255,0.28)]"
                >
                  <MaterialIcons name="add" size={32} color="#DDB7FF" />
                </TouchableOpacity>
              </View>
            </Animated.View>

            <View style={s.textBlock}>
              <Text style={s.headline} className="font-heading">
                Track Your Progress
              </Text>
              <Text style={s.body} className="font-body">
                Never lose track of where you left off.{"\n"}Update episodes in
                one tap.
              </Text>
            </View>
          </Animated.View>
        </View>

        <View className="w-full items-center absolute bottom-10 py-2 px-4">
          <View className="mb-8 flex-row items-center gap-2">
            <View
              className="h-2 w-6 rounded-full bg-[#ddb7ff]"
              style={{
                shadowColor: "#ddb7ff",
                shadowOpacity: 0.8,
                shadowRadius: 8,
              }}
            />
            <View className="h-2 w-2 rounded-full bg-[#2d3449]" />
            <View className="h-2 w-2 rounded-full bg-[#2d3449]" />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onNextSlide}
            className="w-full overflow-hidden rounded-full"
          >
            <LinearGradient
              colors={["#b76dff", "#adc6ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="h-14 flex-row items-center justify-center rounded-full"
            >
              <Text className="text-[18px] font-subheading text-[#400071]">
                Next
              </Text>

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

const CARD_W = Math.min(width - 40, 420);

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: C.surface,
  },

  ambientBlob: {
    position: "absolute",
    top: -100,
    alignSelf: "center",
    width: 240,
    height: 240,
    borderRadius: 170,
    backgroundColor: "rgba(180,100,255,0.10)",
  },

  // Header
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

  // Content wrapper
  content: {
    paddingTop: 5,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
    // gap: 28,
  },

  // Glass card
  glassCard: {
    width: CARD_W,
    borderRadius: 28,
    overflow: "hidden",
    borderWidth: 1,
    backgroundColor: "#1E293B",
    borderColor: "rgba(255,255,255,0.10)",
    shadowColor: "#ddb7ff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.22,
    shadowRadius: 4,
    elevation: 5,
  },
  glassInner: {
    backgroundColor: "rgba(30,41,59,0.52)",
    padding: 24,
    alignItems: "center",
    gap: 16,
  },

  // Poster
  posterWrapper: {
    width: 192,
    height: 192,
    alignItems: "center",
    justifyContent: "center",
  },
  neonRing: {
    position: "absolute",
    width: 192,
    height: 192,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "#ddb7ff",
    shadowColor: "#ddb7ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 18,
    elevation: 12,
    zIndex: 2,
  },
  posterImage: {
    width: 184,
    height: 184,
    borderRadius: 16,
    zIndex: 1,
  },

  // Info row
  infoRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelCaps: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 0.6,
    color: "#ddb7ff",
  },
  epLabel: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 0.5,
    color: "#cfc2d6",
  },

  // Progress
  progressTrack: {
    width: "100%",
    height: 12,
    backgroundColor: "#2d3449",
    borderRadius: 999,
    overflow: "hidden",
  },
  progressFill: {
    flex: 1,
    borderRadius: 999,
  },

  // Add button
  addBtn: {
    width: 56,
    height: 56,
    borderRadius: 100,
    backgroundColor: "rgba(221,183,255,0.13)",
    borderWidth: 1,
    borderColor: "rgba(221,183,255,0.28)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    shadowColor: "#ddb7ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 14,
    elevation: 6,
  },

  // Text
  textBlock: {
    width: "100%",
    paddingHorizontal: 4,
    gap: 8,
  },
  headline: {
    fontSize: 32,
    fontWeight: "800",
    letterSpacing: -0.5,
    color: "#dae2fd",
    lineHeight: 40,
    textAlign: "center",
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    color: "#cfc2d6",
    lineHeight: 26,
    opacity: 0.9,
    textAlign: "center",
  },

  // Dots
  dots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(207,194,214,0.28)",
  },
  dotActive: {
    width: 32,
    height: 8,
    borderRadius: 4,
    shadowColor: "#ddb7ff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 4,
  },

  // CTA
  ctaWrapper: {
    width: "100%",
    maxWidth: 320,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#842bd2",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.55,
    shadowRadius: 20,
    elevation: 10,
  },
  ctaGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  ctaText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#490080",
    letterSpacing: 0.2,
  },

  bottomBar: {
    height: 32,
    backgroundColor: "#060e20",
  },
});
