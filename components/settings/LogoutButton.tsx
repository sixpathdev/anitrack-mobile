import { Pressable, Text } from "react-native";

export default function LogoutButton() {
  return (
    <Pressable className="border border-red-500 rounded-xl py-4 items-center mb-10">
      <Text className="text-red-400 font-bold">Log Out</Text>
    </Pressable>
  );
}
