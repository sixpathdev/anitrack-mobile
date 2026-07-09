import { useMemo, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import ScreenWrapper from "@/components/ScreenWrapper";

type Friend = {
  id: string;
  username: string;
  avatar: string;
  rank: string;
  online: boolean;
};

type Anime = {
  id: string;
  title: string;
  cover: string;
};

const FRIENDS: Friend[] = [
  {
    id: "1",
    username: "NeonShadow_X",
    rank: "Top 1% Contributor",
    online: true,
    avatar: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: "2",
    username: "Akira",
    rank: "Elite Member",
    online: true,
    avatar: "https://i.pravatar.cc/300?img=32",
  },
  {
    id: "3",
    username: "Luffy",
    rank: "Otaku",
    online: false,
    avatar: "https://i.pravatar.cc/300?img=45",
  },
];

const ANIME: Anime[] = [
  {
    id: "1",
    title: "Solo Leveling",
    cover: "https://picsum.photos/220/330?1",
  },
  {
    id: "2",
    title: "Blue Lock",
    cover: "https://picsum.photos/220/330?2",
  },
  {
    id: "3",
    title: "Demon Slayer",
    cover: "https://picsum.photos/220/330?3",
  },
  {
    id: "4",
    title: "One Piece",
    cover: "https://picsum.photos/220/330?4",
  },
];

export default function RecommendFriendScreen() {
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(
    FRIENDS[0],
  );

  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(ANIME[0]);

  const filteredFriends = useMemo(() => {
    if (!search.trim()) return FRIENDS;

    return FRIENDS.filter((friend) =>
      friend.username.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <ScreenWrapper
      bg="#0b1326"
      scroll={true}
      className="px-4"
      includeTopSafeArea={false}
    >
      <View>
        <Text className="text-3xl font-bold text-white font-quicksand-bold">
          Share your vibe
        </Text>

        <Text className="mt-2 text-base leading-6 font-quicksand-medium text-gray-400">
          Personalize your recommendation for the ultimate anime marathon.
        </Text>
      </View>

      <View className="mt-10">
        <View className="mb-4 flex-row items-center">
          <View className="mr-3 h-6 w-6 items-center justify-center rounded-full bg-[#DDB7FF]/20">
            <Text className="text-xs font-bold text-[#DDB7FF]">1</Text>
          </View>

          <Text className="text-xs font-semibold uppercase font-quicksand-medium tracking-[2px] text-[#DDB7FF]">
            Select Recipient
          </Text>
        </View>

        <View className="flex-row items-center rounded-2xl border border-white/10 bg-white/5 px-4">
          <Ionicons name="search" size={20} color="#7D8597" />

          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search friends..."
            placeholderTextColor="#6B7280"
            className="ml-3 flex-1 py-4 text-white"
          />
        </View>

        {/* Search Result */}

        {search.length > 0 && (
          <View className="mt-3 rounded-2xl bg-[#171f33]">
            {filteredFriends.map((friend) => (
              <TouchableOpacity
                key={friend.id}
                onPress={() => {
                  setSelectedFriend(friend);
                  setSearch("");
                }}
                className="flex-row items-center px-4 py-3"
              >
                <Image
                  source={{ uri: friend.avatar }}
                  className="h-12 w-12 rounded-full"
                />

                <View className="ml-3 flex-1">
                  <Text className="font-semibold text-white">
                    {friend.username}
                  </Text>

                  <Text className="text-xs text-gray-400">{friend.rank}</Text>
                </View>

                {friend.online && (
                  <View className="h-3 w-3 rounded-full bg-green-500" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Selected Friend */}

        {selectedFriend && (
          <View className="mt-5 flex-row items-center justify-between rounded-3xl border border-[#DDB7FF]/20 bg-[#171f33] p-4">
            <View className="flex-row items-center">
              <View>
                <Image
                  source={{
                    uri: selectedFriend.avatar,
                  }}
                  className="h-14 w-14 rounded-full"
                />

                {selectedFriend.online && (
                  <View className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#171f33] bg-green-500" />
                )}
              </View>

              <View className="ml-4">
                <Text className="text-lg font-bold text-white">
                  {selectedFriend.username}
                </Text>

                <Text className="text-sm text-[#DDB7FF]">
                  {selectedFriend.rank}
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => setSelectedFriend(null)}>
              <MaterialIcons name="close" size={22} color="#888" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View className="mt-10">
        <View className="mb-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="mr-3 h-6 w-6 items-center justify-center rounded-full bg-[#DDB7FF]/20">
              <Text className="text-xs font-bold text-[#DDB7FF]">2</Text>
            </View>

            <Text className="text-xs font-semibold uppercase font-quicksand-medium tracking-[2px] text-[#DDB7FF]">
              Select Anime
            </Text>
          </View>

          <TouchableOpacity>
            <View className="flex-row items-center">
              <Text className="mr-1 text-xs font-semibold uppercase tracking-[2px] text-[#DDB7FF]/70">
                View All
              </Text>

              <Ionicons name="arrow-forward" size={14} color="#DDB7FF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Search Full Library */}

        <TouchableOpacity
          activeOpacity={0.85}
          className="mb-6 h-14 flex-row items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5"
        >
          <Ionicons name="search" size={20} color="#A3A3A3" />

          <Text className="ml-3 text-base font-semibold text-gray-300">
            Search Full Library
          </Text>
        </TouchableOpacity>

        {/* Horizontal Anime List */}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={ANIME}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingRight: 20,
          }}
          renderItem={({ item }) => {
            const selected = selectedAnime?.id === item.id;

            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => setSelectedAnime(item)}
                className="mr-5"
              >
                <View
                  className={`relative overflow-hidden rounded-2xl ${
                    selected
                      ? "border-2 border-[#DDB7FF]"
                      : "border border-transparent"
                  }`}
                  style={{
                    width: 145,
                    height: 215,
                  }}
                >
                  <Image
                    source={{
                      uri: item.cover,
                    }}
                    className="h-full w-full"
                    resizeMode="cover"
                  />

                  {/* Gradient */}

                  <View
                    className="absolute bottom-0 left-0 right-0 h-24"
                    style={{
                      backgroundColor: "rgba(0,0,0,0.45)",
                    }}
                  />

                  {/* Selected Badge */}

                  {selected && (
                    <View className="absolute right-3 top-3 h-8 w-8 items-center justify-center rounded-lg bg-[#DDB7FF]">
                      <Ionicons name="checkmark" size={18} color="#000" />
                    </View>
                  )}
                </View>

                <Text
                  numberOfLines={1}
                  className={`mt-3 w-[145px] text-center text-sm font-semibold ${
                    selected ? "text-white" : "text-gray-400"
                  }`}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View className="mt-10">
        <View className="mb-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <View className="mr-3 h-6 w-6 items-center justify-center rounded-full bg-[#DDB7FF]/20">
              <Text className="text-xs font-bold text-[#DDB7FF]">3</Text>
            </View>

            <Text className="text-xs font-semibold uppercase tracking-[2px] text-[#DDB7FF]">
              Add Message
            </Text>
          </View>

          <Text className="text-[11px] uppercase tracking-widest text-gray-500">
            Optional
          </Text>
        </View>

        <View className="rounded-3xl border border-white/10 bg-white/5 p-4">
          <TextInput
            multiline
            value={message}
            onChangeText={setMessage}
            placeholder="Why should they watch this?"
            placeholderTextColor="#6B7280"
            maxLength={140}
            textAlignVertical="top"
            className="min-h-[120px] text-base leading-6 text-white"
          />

          <Text className="self-end text-xs text-gray-500">
            {message.length} / 140
          </Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        disabled={!selectedFriend || !selectedAnime}
        onPress={() => {
          console.log({
            friend: selectedFriend,
            anime: selectedAnime,
            message,
          });
        }}
        className={`mt-8 h-14 flex-row items-center justify-center rounded-2xl ${
          selectedFriend && selectedAnime ? "bg-[#DDB7FF]" : "bg-[#4B5563]"
        }`}
        style={{
          shadowColor: "#DDB7FF",
          shadowOpacity: 0.15,
          shadowRadius: 12,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          elevation: 2,
        }}
      >
        <Ionicons name="paper-plane" size={22} color="#1E1033" />
        <Text className="ml-2 text-lg font-quicksand-bold text-[#1E1033]">
          Send Recommendation
        </Text>
      </TouchableOpacity>
      <View className="h-16" />
    </ScreenWrapper>
  );
}
