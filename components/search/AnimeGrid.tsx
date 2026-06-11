import { View, Text } from "react-native";
import AnimeGridCard from "./AnimeGridCard";
import { recommendedAnime } from "@/datasource/recommendedAnime";

export default function AnimeGrid() {
  return (
    <View className="mt-8 px-5">
      <Text className="mb-4 text-2xl font-bold text-white">
        Recommended for You
      </Text>

      <View className="flex-row flex-wrap justify-between">
        {recommendedAnime.map((anime) => (
          <View key={anime.id} className="mb-4 w-[48%]">
            <AnimeGridCard {...anime} />
          </View>
        ))}
      </View>
    </View>
  );
}
