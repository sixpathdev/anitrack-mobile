import ScreenWrapper from "@/components/ScreenWrapper";
import AnimeHero from "@/components/anime-details/AnimeHero";
import GenreChip from "@/components/anime-details/GenreChip";
import QuickActions from "@/components/anime-details/QuickActions";
import NotesCard from "@/components/anime-details/NotesCard";
import ProgressCard from "@/components/anime-details/ProgressCard";
import WatchStatusSelector from "@/components/anime-details/WatchStatusSelector";
import EpisodesSection from "@/components/anime-details/EpisodesSection";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";


export default function AnimeDetailsScreen() {
  const { id } = useLocalSearchParams();

  console.log("Anime ID:", id);


  return (
    <ScreenWrapper bg="#0b1326">
      <AnimeHero />

      <View className="mt-16 px-5 bg-green-300">
        <View className="flex-row flex-wrap gap-2 mb-6">
          <GenreChip title="Action" />
          <GenreChip title="Sci-Fi" />
          <GenreChip title="Cyberpunk" />
          <GenreChip title="Seinen" />
        </View>

        <QuickActions />

        <View className="mt-5">
          <NotesCard />
        </View>

        <View className="mt-4">
          <ProgressCard />
        </View>

        <View className="mt-4">
          <WatchStatusSelector />
        </View>

        <EpisodesSection />
      </View>
    </ScreenWrapper>
  );
}
