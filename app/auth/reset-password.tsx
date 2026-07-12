import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Dimensions,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import ScreenWrapper from "@/components/ScreenWrapper";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import AppTextInput from "@/components/form/AppTextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordFormData, resetPasswordSchema } from "@/validations/auth";

const { width } = Dimensions.get("window");

export default function ResetPasswordScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
      control,
      handleSubmit,
      watch,
      formState: { isSubmitting, isValid },
    } = useForm<ResetPasswordFormData>({
      resolver: zodResolver(resetPasswordSchema),
      mode: "onChange",
      defaultValues: {
        password: "",
      },
    });

    

  return (
    <ScreenWrapper className="flex-1 px-4" bg="#0b1326" scroll>
      <StatusBar barStyle="light-content" backgroundColor={"#0b1326"} />
      <View
        style={{
          width: "100%",
          maxWidth: 420,
          alignSelf: "flex-start",
        }}
      >
        <>
          <Text className="font-heading text-3xl text-[#cfc2d6]">
            Reset Password
          </Text>
          <Text className="mt-2 max-w-[280px] font-body text-[14px] text-[#cfc2d6]">
            Enter the code sent to{" "}
            <Text className="text-white font-bold">
              {"sixpathdev@gmail.com"}
            </Text>{" "}
            to reset your password.
          </Text>
        </>
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
              className="py-6 px-4"
              style={{
                backgroundColor: "rgba(30,41,59,0.45)",
              }}
            >
              <View className="mb-8">
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
              </View>
              <View className="mt-2 mb-8 flex-row flex-wrap justify-end">
                <Text className="font-body text-[14px] text-[#cfc2d6]">
                  Didn&apos;t receive code?
                </Text>
                <Pressable
                  onPress={() => router.push("/auth/login")}
                  className="ml-1"
                >
                  <Text className="font-subheading font-semibold text-[#ddb7ff]">
                    Resend
                  </Text>
                </Pressable>
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
                onPress={() => router.push("/auth/reset-password")}
              >
                <LinearGradient
                  colors={["#b76dff", "#0566d9"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  className="items-center justify-center py-4"
                >
                  <Text className="text-[17px] font-subheading font-bold text-white">
                    Submit
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View className="mt-8 items-center">
                <Text className="text-center font-body text-[14px] text-[#cfc2d6]">
                  Remember Password?
                  <Pressable onPress={() => router.replace("/auth/login")}>
                    <Text className="font-subheading font-semibold text-[#ddb7ff]">
                      {" "}
                      Sign in
                    </Text>
                  </Pressable>
                </Text>
              </View>
            </View>
          </BlurView>
        </View>
      </View>

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
    </ScreenWrapper>
  );
}
