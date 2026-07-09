import { View, Text } from "react-native";

export default function StatsRow() {
  const stats = [
    {
      value: "25K+",
      label: "TITLES",
    },
    {
      value: "1M+",
      label: "TRACKED",
    },
    {
      value: "∞",
      label: "PASSION",
    },
  ];

  return (
    <View className="flex-row justify-between mt-8 pt-5 border-t border-[#2d3449]">
      {stats?.map((item) => (
        <View key={item?.label} className="items-center flex-1">
          <Text className="text-[#ddb7ff] text-2xl font-bold">
            {item?.value}
          </Text>
          <Text className="text-[#cfc2d6] text-xs mt-1">{item?.label}</Text>
        </View>
      ))}
    </View>
  );
}
