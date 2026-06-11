import { ScrollView, Pressable, Text } from "react-native";

const filters = ["ACTION", "ROMANCE", "SCI-FI", "FANTASY", "HORROR"];

export default function FilterPills() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-5"
      contentContainerStyle={{ paddingHorizontal: 20 }}
    >
      {filters.map((item, index) => (
        <Pressable
          key={item}
          className={`mr-3 rounded-full px-4 py-2 ${
            index === 0 ? "bg-[#ddb7ff]" : "bg-[#2d3449]"
          }`}
        >
          <Text
            className={`text-xs font-bold ${
              index === 0 ? "text-black" : "text-gray-300"
            }`}
          >
            {item}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
