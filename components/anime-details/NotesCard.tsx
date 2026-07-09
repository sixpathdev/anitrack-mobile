import { Text, View } from "react-native";

export default function NotesCard() {
  return (
    <View className="bg-[#171f33] rounded-2xl p-4 border-l-4 border-[#ddb7ff]">
      <Text className="text-[#cfc2d6] text-xs mb-2">PERSONAL NOTES</Text>

      <Text className="text-white italic">
        A breathtaking journey through a neon-soaked future.
      </Text>
    </View>
  );
}
