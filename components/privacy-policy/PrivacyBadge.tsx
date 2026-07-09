import { View, Text } from "react-native";

export default function PrivacyBadge() {
  return (
    <View className="self-start rounded-full border border-[#ddb7ff44] bg-[#ddb7ff22] px-4 py-2">
      <Text className="text-[#ddb7ff] font-quicksand-bold text-xs">
        Security First
      </Text>
    </View>
  );
}
