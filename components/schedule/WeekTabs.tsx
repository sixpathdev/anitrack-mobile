import { Pressable, ScrollView, Text } from "react-native";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function WeekTabs() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-5"
      contentContainerStyle={{
        alignItems: "center",
      }}
    >
      {days.map((day) => {
        const active = day === "WED";

        return (
          <Pressable
            key={day}
            className={`mr-2 px-6 py-3 rounded-full justify-center items-center ${
              active ? "bg-[#ddb7ff]" : "bg-[#171f33]"
            }`}
          >
            <Text
              className={`font-bold ${
                active ? "text-[#490080]" : "text-[#cfc2d6]"
              }`}
            >
              {day}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
