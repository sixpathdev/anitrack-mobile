import { Text, TouchableOpacity, View } from "react-native";

export default function WatchStatusSelector() {
  return (
    <View className="bg-[#171f33] rounded-2xl p-4 flex-row justify-between items-center">
      <Text className="text-white font-semibold">Watch Status</Text>

      <View className="flex-row bg-[#0b1326] rounded-full p-1">
        <TouchableOpacity className="bg-[#ddb7ff] px-4 py-2 rounded-full">
          <Text className="text-[#490080] font-bold">Watching</Text>
        </TouchableOpacity>

        <TouchableOpacity className="px-4 py-2">
          <Text className="text-[#cfc2d6]">Plan To</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
