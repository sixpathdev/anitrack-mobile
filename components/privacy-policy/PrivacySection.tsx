import { Text, View } from "react-native";

interface Props {
  title: string;
  body: string;
}

export default function PrivacySection({ title, body }: Props) {
  return (
    <View className="mb-6">
      <Text className="text-[#ddb7ff] text-lg font-quicksand-bold mb-3">
        {title}
      </Text>

      <Text className="text-[#cfc2d6] font-quicksand-medium leading-7">{body}</Text>
    </View>
  );
}
