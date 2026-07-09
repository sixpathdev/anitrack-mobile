import { Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PosterUploadCard() {
  return (
    <View className="items-center mb-8">
      <View className="w-[280px] h-[420px] rounded-2xl overflow-hidden bg-[#171f33]">
        <Image
          source={{
            uri: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
          }}
          className="w-full h-full"
        />

        <View className="absolute inset-0 items-center justify-center">
          <View className="w-16 h-16 rounded-full bg-[#ddb7ff33] items-center justify-center">
            <Ionicons name="camera" size={30} color="#ddb7ff" />
          </View>

          <Pressable className="mt-4 px-5 py-2 rounded-full border border-white/20 bg-black/30">
            <Text className="text-white font-bold">CHANGE POSTER</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
