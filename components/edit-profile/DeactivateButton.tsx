import { TouchableOpacity, Text } from "react-native";

interface Props {
  onPress?: () => void;
}

export default function DeactivateButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="py-4 items-center mb-10"
    >
      <Text className="text-red-400 font-quicksand-bold">
        DEACTIVATE ACCOUNT
      </Text>
    </TouchableOpacity>
  );
}
