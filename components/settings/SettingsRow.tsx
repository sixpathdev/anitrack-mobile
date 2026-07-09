import { Pressable, Text, TouchableOpacity, View } from "react-native";

interface SettingsRowProps {
  title: string;
  rightText?: string;
  showChevron?: boolean;
  onPress?: () => void;
}

export default function SettingsRow({
  title,
  rightText,
  showChevron = true,
  onPress,
}: SettingsRowProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className="p-4 flex-row justify-between items-center"
    >
      <Text className="text-white">{title}</Text>

      {rightText ? (
        <Text className="text-[#cfc2d6]">{rightText}</Text>
      ) : (
        showChevron && <Text className="text-[#ddb7ff] text-lg">›</Text>
      )}
    </TouchableOpacity>
  );
}
