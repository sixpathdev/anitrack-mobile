import { Image, Pressable, Text, View } from "react-native";

type Props = {
  title: string;
  poster: string;
  username: string;
  avatar?: string | null;
};

export default function FriendRecommendationCard({
  title,
  poster,
  username,
  avatar,
}: Props) {
  return (
    <Pressable className="w-36 mr-3">
      <View className="rounded-2xl overflow-hidden">
        <Image
          source={{ uri: poster }}
          className="w-full h-52"
          resizeMode="cover"
        />

        <View className="absolute bottom-0 left-0 right-0 px-2 py-2 flex-row items-center bg-black/70">
          {avatar ? (
            <Image
              source={{ uri: avatar }}
              className="w-5 h-5 rounded-full border border-[#ddb7ff]"
            />
          ) : (
            <View className="w-5 h-5 rounded-full bg-[#adc6ff] items-center justify-center">
              <Text className="text-[8px] font-bold text-[#002e6a]">
                {username[0]}
              </Text>
            </View>
          )}
          <Text
            numberOfLines={1}
            className="ml-1 text-[10px] text-white flex-1"
          >
            @{username}
          </Text>
        </View>
      </View>

      <Text
        numberOfLines={1}
        className="mt-2 text-center text-white font-quicksand-semibold"
      >
        {title}
      </Text>
    </Pressable>
  );
}
