import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import ScreenWrapper from "@/components/ScreenWrapper";

const { width } = Dimensions.get("window");

export default function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScreenWrapper className="flex-1" bg="#0b1326">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "flex-start",
          paddingHorizontal: 20,
        }}
      >
        {/* Main Container */}
        <View
          style={{
            width: "100%",
            maxWidth: 420,
            alignSelf: "flex-start",
            backgroundColor: "red",
          }}
        >
          {/* Header */}
          {/* Logo */}
          <View className="items-center">
            {/* <MaskedView
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
            </MaskedView> */}

            <Text className="max-w-[280px] text-center text-quicksand-medium text-[15px] leading-6 text-[#cfc2d6]">
              Kickstart your journey in the world of animes storytelling and
              track your journey.
            </Text>
          </View>

          {/* Login Card */}
          <View
            className="mt-8 overflow-hidden rounded-[28px] border border-white/10"
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
                className="p-6"
                style={{
                  backgroundColor: "rgba(30,41,59,0.45)",
                }}
              >
                {/* Social Buttons */}
                <View>
                  {/* Google */}
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

                    <Text className="ml-3 text-[16px] font-semibold text-[#dae2fd]">
                      Continue with Google
                    </Text>
                  </TouchableOpacity>

                  {/* Apple */}
                  {/* <TouchableOpacity
                    activeOpacity={0.85}
                    className="flex-row items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <Ionicons name="logo-apple" size={22} color="#dae2fd" />

                    <Text className="ml-3 text-[16px] font-semibold text-[#dae2fd]">
                      Continue with Apple
                    </Text>
                  </TouchableOpacity> */}
                </View>

                {/* Divider */}
                <View className="my-6 flex-row items-center">
                  <View className="h-[1px] flex-1 bg-white/10" />

                  <Text className="mx-4 text-[11px] font-bold tracking-[2px] text-[#988d9f]">
                    OR EMAIL
                  </Text>

                  <View className="h-[1px] flex-1 bg-white/10" />
                </View>

                {/* Email */}
                <View className="mb-5">
                  <Text className="mb-2 ml-2 text-[11px] font-bold tracking-[2px] text-[#cfc2d6]">
                    NAME
                  </Text>
                  <View className="flex-row items-center rounded-2xl border border-white/10 bg-[#2d3449]/40 px-4 py-4">
                    <MaterialIcons
                      name="person-outline"
                      size={20}
                      color="#988d9f"
                    />
                    <TextInput
                      placeholder="John Doe"
                      placeholderTextColor="#988d9f"
                      keyboardType="default"
                      className="ml-3 flex-1 text-[16px] text-[#dae2fd]"
                    />
                  </View>
                </View>

                {/* Email */}
                <View className="mb-5">
                  <Text className="mb-2 ml-2 text-[11px] font-bold tracking-[2px] text-[#cfc2d6]">
                    EMAIL ADDRESS
                  </Text>
                  <View className="flex-row items-center rounded-2xl border border-white/10 bg-[#2d3449]/40 px-4 py-4">
                    <MaterialIcons
                      name="mail-outline"
                      size={20}
                      color="#988d9f"
                    />
                    <TextInput
                      placeholder="name@example.com"
                      placeholderTextColor="#988d9f"
                      keyboardType="email-address"
                      className="ml-3 flex-1 text-[16px] text-[#dae2fd]"
                    />
                  </View>
                </View>

                {/* Password */}
                <View>
                  <View className="mb-2 flex-row items-center justify-between px-2">
                    <Text className="text-[11px] font-bold tracking-[2px] text-[#cfc2d6]">
                      PASSWORD
                    </Text>

                    <TouchableOpacity activeOpacity={0.7}>
                      <Text className="text-[11px] font-bold tracking-[1px] text-[#ddb7ff]">
                        FORGOT PASSWORD?
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View className="flex-row items-center rounded-2xl border border-white/10 bg-[#2d3449]/40 px-4 py-4">
                    <MaterialIcons
                      name="lock-outline"
                      size={20}
                      color="#988d9f"
                    />

                    <TextInput
                      placeholder="••••••••"
                      placeholderTextColor="#988d9f"
                      secureTextEntry={!showPassword}
                      className="ml-3 flex-1 text-[16px] text-[#dae2fd]"
                    />

                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <MaterialIcons
                        name={showPassword ? "visibility-off" : "visibility"}
                        size={20}
                        color="#988d9f"
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Sign In Button */}
                <TouchableOpacity
                  activeOpacity={0.9}
                  className="mt-6 overflow-hidden rounded-2xl"
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
                    <Text className="text-[17px] font-bold text-white">
                      Sign In to AniTrack
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>

          {/* Footer */}
          <View className="mt-8 items-center">
            <Text className="text-center text-[14px] text-[#cfc2d6]">
              Don't have an account?
              <Text className="font-semibold text-[#ddb7ff]">
                {" "}
                Sign up for free
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Posters */}
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
