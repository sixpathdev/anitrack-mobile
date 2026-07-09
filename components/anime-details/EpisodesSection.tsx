import { Text, TouchableOpacity, View } from "react-native";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesSection() {
  return (
    <View className="mt-8 pb-32">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-white text-2xl font-bold">Episodes</Text>

        <TouchableOpacity>
          <Text className="text-[#ddb7ff] font-bold">View All</Text>
        </TouchableOpacity>
      </View>

      <EpisodeCard watched episode={17} title="The Neon Paradox" />

      <EpisodeCard episode={18} title="Ghost in the Signal" />

      <EpisodeCard episode={19} title="Coming Soon..." />
    </View>
  );
}
