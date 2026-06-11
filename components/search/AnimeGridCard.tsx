import { View, Text, ImageBackground } from "react-native";
import { Star } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  title: string;
  rating: string;
  subtitle: string;
  image: string;
}

export default function AnimeGridCard({
  title,
  rating,
  subtitle,
  image,
}: Props) {
  return (
    <ImageBackground
      source={{ uri: image }}
      imageStyle={{ borderRadius: 16 }}
      className="aspect-[2/3] flex-1 overflow-hidden rounded-2xl"
    >
      <LinearGradient
        colors={["transparent", "rgba(11,19,38,0.9)"]}
        className="flex-1 justify-end p-3"
      >
        <View className="mb-1 flex-row items-center">
          <Star size={14} color="#ffb690" fill="#ffb690" />

          <Text className="ml-1 text-xs text-white">{rating}</Text>
        </View>

        <Text numberOfLines={1} className="font-bold text-white">
          {title}
        </Text>

        <Text className="text-xs text-gray-300">{subtitle}</Text>
      </LinearGradient>
    </ImageBackground>
  );
}
