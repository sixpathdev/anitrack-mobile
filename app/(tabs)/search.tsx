import ScreenWrapper from "@/components/ScreenWrapper";
import { ScrollView } from "react-native";

import SearchHeader from "@/components/search/SearchHeader";
import SearchBar from "@/components/search/SearchBar";
import FilterPills from "@/components/search/FilterPills";
import TrendingSearches from "@/components/search/TrendingSearches";
import AnimeGrid from "@/components/search/AnimeGrid";
import BottomNavigation from "@/components/home/BottomNavigation";
// import BottomNavigation from "@/components/BottomNavigation";

export default function SearchScreen() {
  return (
    <ScreenWrapper bg="#0b1326">
      <SearchHeader />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <SearchBar />

        <FilterPills />

        <TrendingSearches />

        <AnimeGrid />
      </ScrollView>

      {/* <BottomNavigation activeTab="search" /> */}
    </ScreenWrapper>
  );
}
