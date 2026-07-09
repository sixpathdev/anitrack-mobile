import { Pressable, Text, View } from "react-native";

export default function ProfileCard() {
  return (
    <View className="bg-[#171f33] rounded-2xl p-4 mb-4">
      <Text className="text-white text-lg font-bold mb-3">Profile</Text>

      <Pressable className="bg-[#222a3d] rounded-xl p-4 flex-row justify-between items-center">
        <Text className="text-white">Review and Update Profile</Text>

        <Text className="text-[#ddb7ff] text-lg">›</Text>
      </Pressable>
    </View>
  );
}
