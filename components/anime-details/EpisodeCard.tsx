import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  watched?: boolean;
  title: string;
  episode: number;
}

export default function EpisodeCard({ watched, title, episode }: Props) {
  return (
    <View className="bg-[#171f33] rounded-2xl p-3 flex-row items-center mb-3">
      <Image
        source={{
          uri: "https://picsum.photos/300/200",
        }}
        className="w-24 h-16 rounded-lg"
      />

      <View className="flex-1 ml-3">
        <Text className="text-[#adc6ff] text-xs">Episode {episode}</Text>

        <Text className="text-white font-semibold" numberOfLines={1}>
          {title}
        </Text>
      </View>

      <Ionicons
        name={watched ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color={watched ? "#adc6ff" : "#cfc2d6"}
      />
    </View>
  );
}
