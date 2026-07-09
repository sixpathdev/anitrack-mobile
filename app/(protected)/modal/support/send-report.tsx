import {
  Pressable,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function SupportModal() {
  const { type } = useLocalSearchParams();
  
  const personalizedTypeTitle = (type: string) => {
    switch (type) {
      case "account-issues":
        return "Account Issues";
      case "technical-support":
        return "Technical Support";
      case "billing-premium":
        return "Billing & Premium";
      case "feature-requests":
        return "Feature Requests";
      default:
        return "Support";
    }
  }


  return (
    <Pressable
      onPress={() => router.back()}
      className="flex-1 bg-black/60 justify-center items-center"
    >
      <Pressable
        className="bg-[#171f33] rounded-2xl p-6 w-[90%]"
        onPress={() => {}}
      >
        <TouchableOpacity
          className="absolute -top-1.5 -right-2"
          onPress={() => router.back()}
        >
          <Ionicons name="close-circle" size={24} color="#cfc2d6" />
        </TouchableOpacity>
        <View className="relative">
          <View className="mb-6">
            <Text className="text-white text-center mb-8 font-quicksand-bold text-3xl">
              {personalizedTypeTitle(type)}
            </Text>
            <Text className="text-[#cfc2d6] text-center mb-6">
              Please provide details about the issue you are facing with your
              account. Our support team will get back to you as soon as
              possible.
            </Text>
          </View>
          <View className="mb-6">
            <Text className="text-[#cfc2d6] mb-2 font-quicksand-medium">
              Title
            </Text>
            <TextInput
              defaultValue=""
              placeholder="Enter title"
              placeholderTextColor="#7f8698"
              className="bg-[#171f33] border-[0.5px] border-[#ddb7ff40] rounded-xl px-4 py-4 text-white"
            />
          </View>
          <View className="mb-6">
            <Text className="text-[#cfc2d6] mb-2 font-quicksand-medium">
              Content
            </Text>
            <TextInput
              multiline
              numberOfLines={5}
              textAlignVertical="top"
              defaultValue=""
              placeholder="Description..."
              placeholderTextColor="#7f8698"
              className="bg-[#171f33] border-[0.5px] border-[#ddb7ff40] rounded-xl px-4 py-4 text-white min-h-[120px]"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.back()}
            className="bg-[#ddb7ff] rounded-xl py-4 flex-row items-center justify-center mb-4"
          >
            <Text className="ml-2 text-[#490080] text-lg font-quicksand-bold">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Pressable>
  );
}
