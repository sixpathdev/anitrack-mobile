import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

export default function QuickActions() {
  return (
    <View className="flex-row gap-4 mb-6">
      <TouchableOpacity className="w-14 h-14 rounded-full bg-[#171f33] justify-center items-center">
        <Ionicons name="heart" size={24} color="#ddb7ff" />
      </TouchableOpacity>

      <TouchableOpacity className="w-14 h-14 rounded-full bg-[#171f33] justify-center items-center">
        <Ionicons name="document-text" size={24} color="#cfc2d6" />
      </TouchableOpacity>
    </View>
  );
}
