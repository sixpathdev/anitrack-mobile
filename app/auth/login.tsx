import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AppTextInput from "@/components/form/AppTextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/validations/auth";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <SafeAreaView className="flex-1 overflow-hidden bg-[#0b1326]">
      <StatusBar barStyle="light-content" backgroundColor={"#0b1326"} />
      <View className="absolute inset-0">
        <View
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 300,
            height: 300,
            borderRadius: 999,
            backgroundColor: "rgba(64,0,113,0.35)",
          }}
        />

        <View
          style={{
            position: "absolute",
            bottom: -140,
            right: -120,
            width: 340,
            height: 340,
            borderRadius: 999,
            backgroundColor: "rgba(5,102,217,0.25)",
          }}
        />
      </View>

      <SafeAreaView className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-start",
            paddingHorizontal: "4%",
          }}
        >
          <View
            style={{
              width: "100%",
              maxWidth: 420,
              alignSelf: "center",
            }}
          >
            <View className="items-center">
              <MaskedView
                maskElement={
                  <Text
                    style={{
                      fontSize: 42,
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
                      fontSize: 42,
                      fontWeight: "800",
                    }}
                  >
                    AniTrack
                  </Text>
                </LinearGradient>
              </MaskedView>
              <Text className="mt-4 max-w-[280px] text-center font-subheading text-[15px] leading-6 text-[#cfc2d6]">
                Enter the world of animes storytelling and track your journey.
              </Text>
            </View>
            <View
              className="mt-8 overflow-hidden rounded-xl border border-white/10"
              style={{
                shadowColor: "#000",
                shadowOpacity: 0.35,
                shadowRadius: 30,
                shadowOffset: { width: 0, height: 12 },
                elevation: 10,
              }}
            >
              <BlurView intensity={40} tint="dark">
                <View
                  className="py-10 px-4"
                  style={{
                    backgroundColor: "rgba(30,41,59,0.45)",
                  }}
                >
                  {/* <View>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      className="mb-4 flex-row items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <Image
                        source={{
                          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1qqUrwtceoZUXbuDZn-zSajF55kQotlBOVW48JqkZNENodbBgA1B38KRVoBHtvIVz4xWEnNmzV1SMJCIsGEwZPpIEcMR3g8OBrh_MKWIZ5VNRYIb3B_hd1qBllxTBr0_M2B82rWRZFB7Y0zrG9FBtsFSqKfKKx9d_1yhaPMxoWx228y1zxD3GwD3pTHDf4dPEzqu8NQp2VYX2Z4T07brvBtQIYg6yobytGNFoRa1fBLToqydndlM2g97RK5tYmN3lRHBKgTQ0Di5Z",
                        }}
                        className="h-5 w-5"
                        resizeMode="contain"
                      />

                      <Text className="ml-3 text-[16px] font-body font-semibold text-[#dae2fd]">
                        Continue with Google
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      className="flex-row items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                    >
                      <Ionicons name="logo-apple" size={22} color="#dae2fd" />
                      <Text className="ml-3 text-[16px] font-body font-semibold text-[#dae2fd]">
                        Continue with Apple
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="my-6 flex-row items-center">
                    <View className="h-[1px] flex-1 bg-white/10" />
                    <Text className="mx-4 text-[11px] font-body font-semibold tracking-[2px] text-[#988d9f]">
                      Or Email
                    </Text>
                    <View className="h-[1px] flex-1 bg-white/10" />
                  </View>
                  */}
                  {/* <View className="mb-8">
                    <Text className="mb-1 text-[12px] font-body font-semibold text-[#cfc2d6]">
                      Email Address
                    </Text>
                    <TextInput
                      placeholder="name@example.com"
                      placeholderTextColor="#988d9f"
                      keyboardType="email-address"
                      className="px-2 h-12 text-[14px] font-body rounded-xl bg-[#2d3449] border border-white/10 text-[#dae2fd]"
                      style={{ height: 48 }}
                    />
                  </View> */}
                  <AppTextInput
                    control={control}
                    name="email"
                    label="Email Address"
                    placeholder="name@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  {/* <View className="mb-8">
                    <Text className="mb-1 text-[12px] font-body font-semibold text-[#cfc2d6]">
                      Password
                    </Text>
                    <View className="relative">
                      <TextInput
                        placeholder="••••••••"
                        placeholderTextColor="#988d9f"
                        secureTextEntry={!showPassword}
                        className="px-2 h-12 text-[14px] font-body rounded-xl bg-[#2d3449] border border-white/10 text-[#dae2fd]"
                        style={{ height: 48 }}
                      />
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-7 -translate-y-1/2 rounded-r-xl py-4 px-3"
                      >
                        <MaterialIcons
                          name={showPassword ? "visibility-off" : "visibility"}
                          size={20}
                          color="#988d9f"
                        />
                      </TouchableOpacity>
                    </View>
                    <View className="mb-1 flex-row items-center justify-end px-2">
                      <TouchableOpacity
                        activeOpacity={0.8}
                        className="mt-2 p-1"
                        onPress={() => router.push("/auth/forgotpassword")}
                      >
                        <Text className="text-[14px] font-body font-bold text-[#ddb7ff]">
                          Forgot Password?
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View> */}
                  <AppTextInput
                    control={control}
                    name="password"
                    label="Password"
                    placeholder="••••••••"
                    secureTextEntry
                    isPassword={true}
                    containerClassName="mb-0"
                  />
                  <View className="mb-8 flex-row items-center justify-end px-2">
                    <TouchableOpacity
                      activeOpacity={0.8}
                      className="mt-2 p-1"
                      onPress={() => router.push("/auth/forgotpassword")}
                    >
                      <Text className="text-[14px] font-body font-bold text-[#ddb7ff]">
                        Forgot Password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    className="overflow-hidden rounded-2xl"
                    style={{
                      shadowColor: "#b76dff",
                      shadowOpacity: 0.35,
                      shadowRadius: 20,
                      shadowOffset: { width: 0, height: 10 },
                    }}
                  >
                    <LinearGradient
                      colors={["#b76dff", "#0566d9"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      className="items-center justify-center py-4"
                    >
                      <Text className="text-[17px] font-subheading font-bold text-white">
                        Sign In
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <View className="mt-8 items-center">
                    <Text className="text-center font-body text-[14px] text-[#cfc2d6]">
                      {`Don't`} have an account?
                      <Pressable onPress={() => router.push("/auth/signup")}>
                        <Text className="font-subheading font-semibold text-[#ddb7ff]">
                          {" "}
                          Sign up for free
                        </Text>
                      </Pressable>
                    </Text>
                  </View>
                </View>
              </BlurView>
            </View>
          </View>
        </ScrollView>

        <View className="absolute bottom-0 left-0 right-0 flex-row justify-center opacity-10">
          {[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC8lhWfB-7KGL8Xu60riEUEu8lhiW2awVWdu_PEVJJUH42IGveyojjJOvHwGRPzWK8BvKIHEZQxP9dfq4wTTtxfTd5GzY5Pzjv_D0bNxI1D6X_nKmarMqoE9mRuBOk3oFmebC9E9tnsCyQacpUBHxE8I7FZ7REgmreRzXdzpBzY4HAZv1nWF3nE5p46LS1SaNWNgcRa5P7aEQjs-Z2V4TsiHOI1y8EI7Y6JmQu6czH9eMGR0lbp3-VXa0eYTBJyKcOFPmajsZEuFGGo",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCDJzGCEvo0BOFo2tHJzxAMDnlNQQgyUFAXF9bDMNQn3EUCfLKhGTJNn_e_1X9bIAYUcQJvGi59hn2UTPCFFqJwAM-3nk9UCMKkVoLLHwXa82__4glWkcJilDI4WIgn8mvT9trj7JpAY4e8J4MApaDLNcgzLOtBHBiuvd6FwNlEJxcAjOSp-zAl1p1qthcTwp5ROfGJJtkV5JFc1R9_p55pgAACMgo8BP64nNNqqdil5AezhGpiabUKnBJqZi_-J24k35f5VxP66EsU",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD2Xm7646Q5AlpMeoKCOu7CcmM9284Uj03ES-TlGDhsaoXX_sTI4qzuyFN8PoIjP5xtM0UFGC-dVLew9J3OKER2AuBQw2yJGXwd9cyAlPpaMcStoTArDHzIs14bSUXxkl1qi-HH9Slx5jLxOPRHd4dqZRyhHysoKsG_Dy_Y0PxVQqr6JEGBb0-zuHRPcp9diRkIF-JN2BgxKvtwwRbZHR5G8Z1EHAo8Jextz8v5jIsIqEuQfM2NwI-GOsruD-APmMh-5kYunZjgTszh",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCSvdFhWCZiv-okqje5v7ng24rrvlqzABGV2XY19CIqqTYJxkgWe67cGsydq7OQVJpsko8B3gXJURtUcVhEJtuOZ4h2SbEF9v1Dv0wpsfbinGbpRsPTIkKQ6BT8TXNb2SJrEGy-LeSRxhCLKQkLtRP2MHKpHMPF82UyZG00famT_HzxdZ1xcL5ov81oQky85C46j7VQgEBGVa7X0ilQGkmSDKEr554XlEFmT1e-FsJ9aq8YxZ2vdf4suCOEITHU9W5Tm2KsWCPIhVlx",
          ].map((item, index) => (
            <View
              key={index}
              className="mx-2 overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                source={{ uri: item }}
                resizeMode="cover"
                style={{
                  width: width * 0.18,
                  height: 130,
                }}
              />
            </View>
          ))}
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
