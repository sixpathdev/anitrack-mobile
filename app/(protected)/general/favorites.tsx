import { FlatList, ImageBackground, Text, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import { scheduleData } from "@/datasource/scheduleData";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function FavoritesScreen() {
  return (
    <ScreenWrapper
      bg="#0b1326"
      scroll={false}
      className="px-4"
      includeTopSafeArea={false}
    >
      <View className="flex-1 mt-5">
        <>
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-white text-xl font-quicksand-bold">
              My Favorites ({scheduleData.length}s)
            </Text>
          </View>
        </>
        <FlatList
          data={scheduleData}
          numColumns={2}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          ListHeaderComponent={null}
          renderItem={({ item }) => (
            <View className="w-[48%] h-72 rounded-2xl overflow-hidden mb-4">
              <ImageBackground
                source={{ uri: item.image }}
                className="flex-1 border-[0.8px] border-[#ec6a06]/60 rounded-2xl overflow-hidden"
                resizeMode="cover"
              >
                <LinearGradient
                  colors={[
                    "transparent",
                    "rgba(11,19,38,0.01)",
                    "rgba(11,19,38,0.4)",
                  ]}
                  className="flex-1 justify-end p-3"
                >
                  <View className="absolute top-1 left-1 bg-[#ffffff]/20 border border-[#ffffff]/40 rounded-full p-2">
                    <MaterialIcons name="favorite" size={16} color="#ffffff" />
                  </View>
                  <Text
                    numberOfLines={2}
                    className="text-white font-quicksand-medium text-base"
                  >
                    {item.title}
                  </Text>
                </LinearGradient>
              </ImageBackground>
            </View>
          )}
        />
      </View>
    </ScreenWrapper>
  );
}
