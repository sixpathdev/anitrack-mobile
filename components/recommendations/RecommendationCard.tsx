import { Image, Pressable, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

type Status = "seen" | "pending";

interface Props {
  item: {
    id: string;
    title: string;
    poster: string;
    receiverAvatar: string;
    sender: string;
    time: string;
    status: Status;
  };
  index: number;
}

export default function RecommendationCard({
  item,
  index,
}: Props) {
  const statusStyle = {
    seen: {
      text: "Seen",
      color: "#0566D9",
      glow: "rgba(5,102,217,0.35)",
    },
    pending: {
      text: "Pending",
      color: "#EC6A06",
      glow: "rgba(236,106,6,0.35)",
    },
  };

  const current = statusStyle[item.status];

  return (
    <Animated.View entering={FadeInDown.delay(index * 120).springify()}>
      <Pressable>
        {({ pressed }) => (
          <Animated.View
            className="overflow-hidden rounded-2xl border border-white/10"
            style={{
              transform: [{ scale: pressed ? 0.98 : 1 }],
            }}
          >
            <LinearGradient
              colors={["rgba(23,31,51,0.90)", "rgba(11,19,38,0.95)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="flex-row px-4 py-2"
            >
              <View className="mr-4 h-28 w-20 overflow-hidden rounded-xl">
                <Image
                  source={{ uri: item.poster }}
                  className="h-full w-full"
                  resizeMode="cover"
                />
              </View>
              <View className="flex-1 justify-center">
                <View className="mb-3 flex-row items-start justify-between">
                  <Text
                    numberOfLines={1}
                    className="mr-2 flex-1 text-lg font-quicksand-bold text-white"
                  >
                    {item.title}
                  </Text>
                  <View
                    style={{
                      backgroundColor: current.glow,
                      borderColor: current.color,
                      shadowColor: current.color,
                      shadowOpacity: 0.6,
                      shadowRadius: 10,
                      elevation: 4,
                    }}
                    className="rounded-full border px-3 py-1"
                  >
                    <Text
                      style={{ color: current.color }}
                      className="text-[10px] font-quicksand-bold"
                    >
                      {current.text}
                    </Text>
                  </View>
                </View>
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Image
                      source={{ uri: item.receiverAvatar }}
                      className="h-7 w-7 rounded-full"
                    />

                    <Text
                      numberOfLines={1}
                      className="max-w-[150px] text-sm font-quicksand-bold font-semibold text-zinc-300"
                    >
                      {item.sender}
                    </Text>
                  </View>

                  <Text className="text-xs text-zinc-500 font-quicksand-bold">{item.time}</Text>
                </View>
              </View>
            </LinearGradient>
          </Animated.View>
        )}
      </Pressable>
    </Animated.View>
  );
}