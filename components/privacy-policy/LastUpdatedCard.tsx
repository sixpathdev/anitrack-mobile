import { Text, View } from "react-native";

export default function LastUpdatedCard() {
  return (
    <View className="bg-[#171f33] rounded-2xl p-5 mt-3 mb-10">
      <Text className="text-[#8f96ab] text-center leading-6">
        Last Updated{"\n"}
        June 07, 2026
      </Text>

      <Text className="text-[#8f96ab] text-center mt-4">
        Questions? Reach out to our support team inside the app.
      </Text>
    </View>
  );
}
