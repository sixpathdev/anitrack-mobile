import { FlatList } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import RecommendationCard from "@/components/recommendations/RecommendationCard";
import { recommendations } from "@/datasource/recommendations";

export default function SentRecommendationsScreen() {
  return (
    <ScreenWrapper
      bg="#0b1326"
      scroll={true}
      className="px-4"
      includeTopSafeArea={false}
    >
      <FlatList
        data={recommendations}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <RecommendationCard item={item} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 18,
          paddingBottom: 120,
          rowGap: 12,
        }}
      />
    </ScreenWrapper>
  );
}