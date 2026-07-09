import { Text, View } from "react-native";

export default function GenreChip({ title }: { title: string }) {
  return (
    <View className="bg-[#171f33] px-4 py-2 rounded-full">
      <Text className="text-[#cfc2d6] font-semibold">{title}</Text>
    </View>
  );
}
