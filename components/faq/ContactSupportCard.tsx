import { TouchableOpacity, Text, View } from "react-native";
import { CircleHelp } from "lucide-react-native";

export default function ContactSupportCard() {
  return (
    <View className="items-center py-8">
      <Text className="text-[#cfc2d6] mb-4">Still need help?</Text>

      <TouchableOpacity
        activeOpacity={0.85}
        className="bg-[#171f33] px-6 py-3 rounded-full flex-row items-center"
      >
        <CircleHelp size={20} color="#ddb7ff" />

        <Text className="text-[#ddb7ff] ml-2 font-semibold">
          Contact Support
        </Text>
      </TouchableOpacity>
    </View>
  );
}
