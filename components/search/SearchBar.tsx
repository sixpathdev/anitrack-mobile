import { View, TextInput, Pressable } from "react-native";
import { Search, SlidersHorizontal } from "lucide-react-native";

export default function SearchBar() {
  return (
    <View className="mx-5 mt-4 flex-row items-center rounded-2xl border border-[#ddb7ff40] bg-[#222a3d] px-4 py-3">
      <Search size={20} color="#ddb7ff" />

      <TextInput
        placeholder="Search anime, studios, or users..."
        placeholderTextColor="#9ca3af"
        className="flex-1 ml-3 text-white"
      />

      <Pressable>
        <SlidersHorizontal size={20} color="#9ca3af" />
      </Pressable>
    </View>
  );
}
