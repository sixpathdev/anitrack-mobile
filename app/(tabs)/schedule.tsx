import { FlatList, Text, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import TopBar from "@/components/schedule/TopBar";
import WeekTabs from "@/components/schedule/WeekTabs";
import ScheduleCard from "@/components/schedule/ScheduleCard";
import { scheduleData } from "@/datasource/scheduleData";

export default function ScheduleScreen() {
  return (
    <ScreenWrapper bg="#0b1326" scroll={false}>
      <View className="pb-3">
        <TopBar />
        <WeekTabs />
      </View>

      <View className="flex-1 px-4">
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
          ListHeaderComponent={
            <>
              <View className="flex-row justify-between items-center mb-5">
                <Text className="text-white text-2xl font-bold">
                  Wednesday Schedule
                </Text>

                <Text className="text-[#adc6ff] font-bold">
                  {scheduleData.length} RELEASES
                </Text>
              </View>
            </>
          }
          renderItem={({ item }) => (
            <ScheduleCard
              title={item.title}
              image={item.image}
              time={item.time}
              badge={item.badge}
              badgeType={item.badgeType}
            />
          )}
        />
      </View>
    </ScreenWrapper>
  );
}
