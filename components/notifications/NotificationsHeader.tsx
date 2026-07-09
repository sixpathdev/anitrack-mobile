import { View, Text, Pressable } from "react-native";

export default function NotificationsHeader() {
  return (
    <View className="mb-4 flex-row justify-between items-end">
      <View>
        <Text className="text-[#ddb7ff] text-xs font-bold mb-1">
          ACTIVITY CENTER
        </Text>

        <Text className="text-white text-3xl font-bold">Notifications</Text>
      </View>

      <Pressable>
        <Text className="text-[#ddb7ff] text-xs font-bold">MARK ALL READ</Text>
      </Pressable>
    </View>
  );
}
