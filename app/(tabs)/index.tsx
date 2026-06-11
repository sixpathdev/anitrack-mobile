import { Text, View, ScrollView, Pressable, FlatList } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import TopBar from "@/components/home/TopBar";
import HeroBanner from "@/components/home/HeroBanner";
import ContinueWatchingCard from "@/components/home/ContinueWatchingCard";
import ReleasePoster from "@/components/home/ReleasePoster";
import TrendingCard from "@/components/home/TrendingCard";
import BottomNavigation from "@/components/home/BottomNavigation";
import { trendingAnime } from "@/datasource/trendingAnime";
import { releasingToday } from "@/datasource/releaseposter";
import { ContinueWatching } from "@/datasource/ContinueWatching";


const Index = () => {
  return (
    <ScreenWrapper className="flex-1 px-4" bg="#0b1326">
      <TopBar />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <HeroBanner />

        {/* Continue Watching */}
        <View className="mt-6">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-white font-quicksand-medium">
              Continue Watching
            </Text>

            <Pressable>
              <Text className="text-md font-bold text-white font-quicksand-medium">
                See All
              </Text>
            </Pressable>
          </View>

          <FlatList
            horizontal
            data={ContinueWatching}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ContinueWatchingCard
                id={Number(item.id)}
                title={item.title}
                episode={item.episode}
                progress={item.progress}
                image={item.image}
              />
            )}
            ItemSeparatorComponent={() => <View className="w-3" />}
          />
        </View>

        {/* Releasing Today */}
        <View className="mt-6">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-white font-quicksand-medium">
              Releasing Today
            </Text>

            <Pressable>
              <Text className="text-md font-bold text-white font-quicksand-medium">
                See All
              </Text>
            </Pressable>
          </View>

          <FlatList
            horizontal
            data={releasingToday}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ReleasePoster
                title={item.title}
                time={item.time}
                image={item.image}
              />
            )}
            ItemSeparatorComponent={() => <View className="w-3" />}
          />
        </View>

        {/* Trending */}
        <View className="mt-6">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-white font-quicksand-medium">
              Trending
            </Text>

            <Pressable>
              <Text className="text-md font-bold text-white font-quicksand-medium">
                See All
              </Text>
            </Pressable>
          </View>

          {trendingAnime.map((anime) => (
            <TrendingCard
              key={anime.id}
              title={anime.title}
              genres={anime.genres}
              rating={anime.rating}
              image={anime.image}
            />
          ))}
        </View>
      </ScrollView>

      {/* <BottomNavigation /> */}
    </ScreenWrapper>
  );
};

export default Index;


