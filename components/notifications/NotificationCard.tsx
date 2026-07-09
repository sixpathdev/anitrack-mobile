import { Pressable, Text, View } from "react-native";

interface Props {
  title: string;
  time: string;
  message: string;
  actionText?: string;
  type?: "primary" | "secondary";
  read?: boolean;
}

export default function NotificationCard({
  title,
  time,
  message,
  actionText,
  type = "primary",
  read,
}: Props) {
  return (
    <View
      className={`rounded-2xl p-4 border border-white/5 bg-[#131b2e] ${
        read ? "opacity-60" : ""
      }`}
    >
      <View className="flex-row justify-between mb-2">
        <Text className="text-white font-bold">{title}</Text>

        <Text className="text-xs text-[#cfc2d6]">{time}</Text>
      </View>

      <Text className="text-[#cfc2d6] leading-5">{message}</Text>

      {actionText && (
        <Pressable
          className={`mt-4 self-start rounded-lg px-4 py-2 ${
            type === "primary"
              ? "bg-[#ddb7ff]/10 border border-[#ddb7ff]/20"
              : "bg-[#2d3449] border border-white/10"
          }`}
        >
          <Text
            className={`font-bold text-xs ${
              type === "primary" ? "text-[#ddb7ff]" : "text-white"
            }`}
          >
            {actionText}
          </Text>
        </Pressable>
      )}
    </View>
  );
}
