import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  onPress?: () => void;
}

export default function SaveButton({ onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="bg-[#ddb7ff] rounded-xl py-4 flex-row items-center justify-center mb-4"
    >
      <Ionicons name="checkmark-circle" size={22} color="#490080" />

      <Text className="ml-2 text-[#490080] text-lg font-quicksand-bold">
        Save Changes
      </Text>
    </TouchableOpacity>
  );
}
