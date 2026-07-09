import ScreenWrapper from "@/components/ScreenWrapper";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import {
  Mail,
  Search,
  SlidersHorizontal,
  MessageCircle,
} from "lucide-react-native";
import { supportCategories } from "@/datasource/support";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

export default function SupportScreen() {
  return (
    <ScreenWrapper bg="#0b1326" scroll={false}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 0,
          paddingBottom: 60,
        }}
      >
        <View className="mb-8">
          <Text className="text-white text-3xl font-quicksand-bold text-center mb-5">
            How can we help?
          </Text>
          <View className="mt-4 flex-row items-center rounded-2xl border border-[#ddb7ff40] bg-[#222a3d] px-4 py-3">
            <Search size={20} color="#ddb7ff" />
            <TextInput
              placeholder="Search anime, studios, or users..."
              placeholderTextColor="#9ca3af"
              className="flex-1 ml-3 text-white"
            />
            <Pressable>
              <SlidersHorizontal size={20} color="#9ca3af" />
            </Pressable>
          </View>
          <View className="flex-row flex-wrap justify-between mt-12">
            {supportCategories.map((item) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.85}
                onPress={() =>
                  router.push({
                    pathname: item?.goto,
                    params: { type: item.type },
                  })
                }
                className="bg-[#171f33] rounded-2xl py-8 items-center justify-center w-[48%] mb-4"
              >
                <item.icon color="#ddb7ff" size={38} />
                <Text className="text-white text-center mt-4 font-quicksand-medium">
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View className="items-center mb-10">
            <TouchableOpacity
              activeOpacity={0.85}
              className="bg-[#ddb7ff] h-14 rounded-full w-full items-center justify-center flex-row mb-6"
            >
              <Mail size={20} color="#490080" />
              <Text className="text-[#490080] font-bold text-lg ml-2 font-quicksand-bold">
                Contact Us
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-row items-center"
            >
              <View className="bg-[#5865f246] h-8 w-8 rounded-3xl items-center justify-center">
                <MaterialIcons name="discord" size={16} color="#5865F2" />
              </View>
              <Text className="text-[#cfc2d6] ml-2 font-quicksand-bold">
                Join our Discord
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
