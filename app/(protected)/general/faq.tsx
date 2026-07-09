import { useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import FAQAccordion from "@/components/faq/FAQAccordion";
import { faqTabs } from "@/datasource/faq";
import { CircleHelp } from "lucide-react-native";
import {
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
  ScrollView,
} from "react-native";

export default function FAQScreen() {
  const [tab, setTab] = useState("General");

  return (
    <ScreenWrapper bg="#0b1326" className="px-5 pt-5">
      <View className="flex-row items-center">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-8 h-10"
        >
          {faqTabs?.map((tabI) => (
            <TouchableOpacity
              key={tabI}
              activeOpacity={0.85}
              onPress={() => setTab(tabI)}
              className={`mr-3 h-8 px-3 justify-center rounded-2xl ${
                tab === tabI ? "bg-[#ddb7ff]" : "bg-[#171f33]"
              }`}
            >
              <Text
                className={`font-quicksand-medium ${
                  tab === tabI ? "text-[#490080]" : "text-[#cfc2d6]"
                }`}
              >
                {tabI}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        }}
        imageStyle={{
          borderRadius: 16,
          opacity: 0.45,
        }}
        className="h-48 rounded-2xl overflow-hidden mb-6"
      >
        <View className="flex-1 bg-black/45 justify-end p-5">
          <Text className="text-[#ddb7ff] text-2xl font-quicksand-bold">
            How can we help?
          </Text>
          <Text className="text-[#cfc2d6] mt-2 font-quicksand-medium">
            Find answers to common questions about AniTrack.
          </Text>
        </View>
      </ImageBackground>
      <FAQAccordion />
      <View className="items-center py-4">
        <Text className="text-[#cfc2d6] mb-4 font-quicksand-medium">Still need help?</Text>
        <TouchableOpacity
          activeOpacity={0.85}
          className="bg-[#171f33] px-6 py-3 rounded-full flex-row items-center"
        >
          <CircleHelp size={20} color="#ddb7ff" />
          <Text className="text-[#ddb7ff] ml-2 font-quicksand-bold">
            Contact Support
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
