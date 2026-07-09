import { Switch, Text, View } from "react-native";
import SettingsRow from "./SettingsRow";

export default function NotificationCard() {
  return (
    <View className="bg-[#171f33] rounded-2xl mb-4 overflow-hidden">
      <View className="p-4 border-b border-[#2d3449]">
        <Text className="text-white text-lg font-bold">Notifications</Text>
      </View>

      <View className="p-4 flex-row justify-between items-center">
        <View className="flex-1 mr-4">
          <Text className="text-white font-semibold">Push Notifications</Text>

          <Text className="text-[#cfc2d6] text-sm mt-1">
            Alerts for new episodes & news
          </Text>
        </View>

        <Switch value />
      </View>

      <View className="border-t border-[#2d3449]">
        <SettingsRow title="Notification Preferences" />
      </View>
    </View>
  );
}
