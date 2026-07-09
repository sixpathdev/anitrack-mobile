import { Text, View } from "react-native";
import SettingsRow from "./SettingsRow";
import { useRouter } from "expo-router";

interface Item {
  title: string;
  rightText?: string;
  screen?: string;
}

interface SettingsSectionProps {
  title?: string;
  items: Item[];
}

export default function SettingsSection({
  title,
  items,
}: SettingsSectionProps) {
  const router = useRouter()


  return (
    <View className="bg-[#171f33] rounded-2xl mb-4 overflow-hidden">
      {title && (
        <View className="p-4 border-b border-[#2d3449]">
          <Text className="text-white text-lg font-bold">{title}</Text>
        </View>
      )}

      {items?.map((item, index) => (
        <View
          key={item.title}
          className={
            index !== items.length - 1 ? "border-b border-[#2d3449]" : ""
          }
        >
          <SettingsRow
            onPress={() => router.push(item?.screen)}
            title={item.title}
            rightText={item.rightText}
          />
        </View>
      ))}
    </View>
  );
}
