import ScreenWrapper from "@/components/ScreenWrapper";
import { Sparkles } from "lucide-react-native";
import StatsRow from "@/components/about/StatsRow";
import { ScrollView, View, Text } from "react-native";

export default function AboutScreen() {
  return (
    <ScreenWrapper bg="#0b1326" scroll={false}>
      {/* <TopBar title="About" /> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 0,
          paddingBottom: 60,
        }}
      >
        <View className="items-center mb-8">
          <View className="w-32 h-32 rounded-[32px] bg-[#ddb7ff] items-center justify-center shadow-lg">
            <Text className="text-[#490080] text-6xl font-bold">A</Text>
          </View>
          <Text className="text-white text-3xl font-bold mt-6">AniTrack</Text>
          <View className="flex-row items-center mt-2">
            <View className="bg-[#ddb7ff22] px-3 py-1 rounded-full">
              <Text className="text-[#ddb7ff] text-xs font-bold">v2.4.0</Text>
            </View>
            <Text className="text-[#cfc2d6] ml-3 text-xs">CINEMATIC NEON</Text>
          </View>
        </View>
        <View className="bg-[#171f33] rounded-3xl p-5 mb-6">
          <View className="flex-row items-center mb-4">
            <Sparkles color="#ddb7ff" size={22} />
            <Text className="text-white text-lg font-bold ml-3">
              Our Mission
            </Text>
          </View>
          <Text className="text-[#cfc2d6] leading-6">
            AniTrack is engineered for the ultimate anime community. {`We've`}{" "}
            built a sanctuary to track your journey, discover hidden
            masterpieces, and celebrate the series that define generations.
            Every pixel is optimized to let vibrant storytelling take center
            stage in a cinematic futurist ecosystem.
          </Text>
          <StatsRow />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
