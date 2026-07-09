import {
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import TopBar from "@/components/TopBar";
import HeroBanner from "@/components/home/HeroBanner";
import ContinueWatchingCard from "@/components/home/ContinueWatchingCard";
import ReleasePoster from "@/components/home/ReleasePoster";
import TrendingCard from "@/components/home/TrendingCard";
import BottomNavigation from "@/components/home/BottomNavigation";
import { trendingAnime } from "@/datasource/trendingAnime";
import { releasingToday } from "@/datasource/releaseposter";
import { ContinueWatching } from "@/datasource/ContinueWatching";
import { recommendations } from "@/datasource/friendsRecommendations";
import FriendRecommendationCard from "@/components/home/FriendRecommendationCard";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <ScreenWrapper className="flex-1 px-4" bg="#0b1326" scroll={false}>
      <TopBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <HeroBanner />
        <View className="mt-12">
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
        <View className="mt-12">
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="text-lg font-bold text-white font-quicksand-medium">
              Recommendations
            </Text>
            <Pressable>
              <Text className="text-md font-bold text-white font-quicksand-medium">
                See All
              </Text>
            </Pressable>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 0,
              paddingRight: 10,
            }}
          >
            {recommendations.map((anime) => (
              <FriendRecommendationCard key={anime.id} {...anime} />
            ))}
          </ScrollView>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("/recommend-friend")}
            className="w-2/5 mx-auto mt-8 overflow-hidden rounded-lg"
          >
            <LinearGradient
              colors={["#ddb7ff", "#842bd2"]}
              className="items-center justify-center py-3"
            >
              <Text className="font-quicksand-bold text-md text-white">
                Recommend to friend
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View className="mt-12 mb-16">
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
    </ScreenWrapper>
  );
};

export default Index;
