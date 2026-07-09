import ScreenWrapper from "@/components/ScreenWrapper";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PosterUploadCard from "@/components/add-anime/PosterUploadCard";
import AnimeTitleInput from "@/components/add-anime/AnimeTitleInput";
import { useState } from "react";
import { daysOfWeek } from "@/datasource/daysOfWeek";
import Slider from "@react-native-community/slider";

export default function AddAnimeScreen() {
  const [selected, setSelected] = useState("WED");
  const [episode, setEpisode] = useState(12);

  return (
    <ScreenWrapper bg="#0b1326" className="px-4 pt-4" scroll={true}>
      <PosterUploadCard />
      <AnimeTitleInput />

      <View className="mb-6">
        <Text className="text-[#cfc2d6] mb-3">GENRES</Text>

        <View className="flex-row flex-wrap">
          <View className="px-4 py-2 rounded-full bg-[#ddb7ff22] mr-2 mb-2">
            <Text className="text-[#ddb7ff] font-bold">ACTION</Text>
          </View>

          <View className="px-4 py-2 rounded-full bg-[#adc6ff22] mr-2 mb-2">
            <Text className="text-[#adc6ff] font-bold">SCI-FI</Text>
          </View>

          <View className="px-4 py-2 rounded-full bg-[#222a3d] mr-2 mb-2">
            <Text className="text-white">CYBERPUNK</Text>
          </View>

          <Pressable className="w-10 h-10 rounded-full bg-[#171f33] items-center justify-center">
            <Ionicons name="add" size={22} color="#ddb7ff" />
          </Pressable>
        </View>
      </View>
      <View className="mb-6">
        <View className="flex-row justify-between mb-3">
          <Text className="text-[#cfc2d6]">EPISODES WATCHED</Text>

          <Text className="text-[#ddb7ff] text-2xl font-bold">
            {episode}
            <Text className="text-[#cfc2d6] text-base"> / 24</Text>
          </Text>
        </View>

        <View className="bg-[#171f33] rounded-xl p-4">
          <Slider
            minimumValue={0}
            maximumValue={24}
            step={1}
            value={episode}
            onValueChange={setEpisode}
            minimumTrackTintColor="#ddb7ff"
            maximumTrackTintColor="#2d3449"
          />
        </View>
      </View>
      <View>
        <Text className="text-[#cfc2d6] mb-3">RELEASE DAY</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mb-6"
        >
          {daysOfWeek.map((day) => (
            <Pressable
              key={day}
              onPress={() => setSelected(day)}
              className={`w-12 h-12 rounded-xl mr-2 items-center justify-center ${
                selected === day ? "bg-[#ddb7ff]" : "bg-[#171f33]"
              }`}
            >
              <Text
                className={`font-bold text-xs ${
                  selected === day ? "text-[#490080]" : "text-white"
                }`}
              >
                {day}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <View className="mb-4 py-2">
        <Text className="text-[#cfc2d6] mb-2 font-quicksand-medium">
          PERSONAL NOTES / STORY
        </Text>
        <View className="bg-[#171f33] rounded-xl px-1">
          <TextInput
            multiline
            numberOfLines={5}
            textAlignVertical="top"
            placeholder="Add a short description or your thoughts..."
            placeholderTextColor="#7f8698"
            className="text-white min-h-[120px]"
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        className="bg-[#ddb7ff] rounded-xl py-4 gap-1 flex-row items-center justify-center mb-8"
      >
        <Ionicons name="library-outline" size={20} color="#490080" />
        <Text className="text-[#490080] text-lg font-semibold">
          Add to Library
        </Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}
