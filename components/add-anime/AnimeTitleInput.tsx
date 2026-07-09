import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AnimeTitleInput() {
  return (
    <View className="mb-6">
      <Text className="text-[#cfc2d6] mb-2">ANIME TITLE</Text>

      <View className="bg-[#171f33] rounded-xl p-4 flex-row items-center">
        <Ionicons name="film-outline" size={20} color="#ddb7ff" />

        <TextInput
          placeholder="Enter anime name..."
          placeholderTextColor="#7f8698"
          className="flex-1 ml-3 text-white"
        />
      </View>
    </View>
  );
}
