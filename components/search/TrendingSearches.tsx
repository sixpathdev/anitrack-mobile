import { View, Text, Pressable } from "react-native";
import { TrendingUp, ArrowUpRight } from "lucide-react-native";

const searches = [
  "Chainsaw Man: Reze Arc",
  "Solo Leveling Season 2",
  "Oshi no Ko Movie",
];

export default function TrendingSearches() {
  return (
    <View className="mt-8 px-5">
      <View className="mb-4 flex-row items-center justify-between">
        <Text className="text-2xl font-bold text-white">Trending</Text>

        <TrendingUp size={22} color="#ddb7ff" />
      </View>

      {searches.map((item, index) => (
        <Pressable
          key={item}
          className="mb-2 flex-row items-center rounded-xl bg-[#171f33] p-4"
        >
          <Text className="w-8 text-[#ddb7ff80] font-bold">
            {String(index + 1).padStart(2, "0")}
          </Text>

          <Text className="flex-1 text-white">{item}</Text>

          <ArrowUpRight size={16} color="#9ca3af" />
        </Pressable>
      ))}
    </View>
  );
}
