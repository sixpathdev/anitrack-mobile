import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";
import LogoutButton from "@/components/settings/LogoutButton";
import { ProfileTabListing } from "@/datasource/profileTab";

export default function ProfileScreen() {
  const router = useRouter();
  

  return (
    <ScreenWrapper bg="#0b1326" scroll={false}>
      <View className="items-center pt-12 pb-8">
        <View className="h-32 w-32 rounded-full p-1 bg-[#ddb7ff]">
          <Image
            source={{
              uri: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
            }}
            className="h-full w-full rounded-full"
          />
        </View>
        <Text className="text-white text-2xl font-bold mt-4">@sixpathdev</Text>
        <Text className="text-[#cfc2d6] mt-1">Premium Member since 2026</Text>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
      >
        <View className="bg-[#171f33] rounded-2xl p-4 mb-4 gap-2s">
          {ProfileTabListing?.map((item) => (
            <TouchableOpacity
              key={item?.id}
              activeOpacity={0.8}
              onPress={() => router.push(item?.screen)}
              className="bg-[#222a3d] rounded-xl px-4 py-5 mb-2 flex-row justify-between items-center"
            >
              <View className="flex-row items-center">
                <Text className="text-white">{item?.title}</Text>
              </View>
              <Text className="text-[#ddb7ff] text-lg">›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* <SettingsSection
          title="Library"
          items={[
            {
              title: "Favorites Screen",
            },
          ]}
        /> */}

        {/* <SettingsSection
          title="Security"
          items={[
            {
              title: "Account Security",
            },
            {
              title: "Privacy Settings",
            },
          ]}
        /> */}

        {/* <SettingsSection
          title="General"
          items={[
            {
              title: "FAQ",
              screen: "/general/faq",
            },
            {
              title: "Contact Support",
              screen: "/general/support",
            },
            {
              title: "About AniTrack",
              rightText: "v1.0.0",
              screen: "/general/about",
            },
          ]}
        /> */}

        <LogoutButton />
      </ScrollView>
    </ScreenWrapper>
  );
}
