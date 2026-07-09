import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";

export default function EmailInput() {
  return (
    <View className="mb-8">
      <Text className="text-[#cfc2d6] mb-2 font-quicksand-medium">
        EMAIL ADDRESS
      </Text>

      <View className="bg-[#171f33] rounded-xl flex-row items-center px-4">
        <Ionicons name="lock-closed" size={18} color="#cfc2d6" />

        <TextInput
          editable={false}
          value="arata.saito@neotrack.io"
          className="flex-1 ml-3 py-4 text-[#cfc2d6]"
        />
      </View>

      <Text className="text-[#7f8698] text-xs mt-2">
        Email cannot be changed for security reasons.
      </Text>
    </View>
  );
}
