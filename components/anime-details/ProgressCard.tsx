import { Text, View } from "react-native";

export default function ProgressCard() {
  return (
    <View className="bg-[#171f33] rounded-2xl p-4 border-l-4 border-[#adc6ff]">
      <Text className="text-[#cfc2d6] text-xs mb-3">PROGRESS</Text>

      <Text className="text-[#adc6ff] text-3xl font-bold">12/24</Text>

      <Text className="text-[#cfc2d6]">Episodes watched</Text>
    </View>
  );
}
