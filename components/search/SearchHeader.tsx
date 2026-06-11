import { View, Text, Image, Pressable } from "react-native";
import { Bell } from "lucide-react-native";
// import GradientText from "../GradientText";

export default function SearchHeader() {
  return (
    <View className="flex-row items-center justify-between px-5 py-4">
      <View className="flex-row items-center">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
          }}
          className="w-10 h-10 rounded-full"
        />

        <Text className="ml-3 text-2xl font-bold">AniTrack</Text>
      </View>

      <Pressable>
        <Bell size={26} color="#ddb7ff" />
      </Pressable>
    </View>
  );
}
