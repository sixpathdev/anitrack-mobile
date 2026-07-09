import { View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import NotificationCard from "./NotificationCard";

export default function NotificationSection({
  title,
  icon,
  color,
  count,
  notifications,
}: any) {
  return (
    <View className="mb-8">
      <View
        className="flex-row justify-between items-center border-b pb-2 mb-4"
        style={{
          borderColor: `${color}30`,
        }}
      >
        <View className="flex-row items-center">
          <MaterialIcons name={icon} size={18} color={color} />

          <Text className="font-bold ml-2 text-xs" style={{ color }}>
            {title}
          </Text>
        </View>

        {count && (
          <Text className="text-xs" style={{ color }}>
            {count}
          </Text>
        )}
      </View>

      <View className="gap-3">
        {notifications.map((item: any) => (
          <NotificationCard key={item.id} {...item} />
        ))}
      </View>
    </View>
  );
}
