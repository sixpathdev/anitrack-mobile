import { Image, Text, View } from "react-native";

export default function AnimeHero() {
  return (
    <View className="bg-blue-300">
      {/* <Image
        source={{
          uri: "https://picsum.photos/900/600",
        }}
        className="w-full h-[400px]"
      /> */}

      <View className="absolute inset-0 bg-black/40" />

      <View className="absolute bottom-0 left-0 right-0 px-5 flex-row items-end">
        <Image
          source={{
            uri: "https://picsum.photos/300/450",
          }}
          className="w-32 h-48 rounded-2xl"
        />

        <View className="flex-1 ml-4 mb-6">
          <View className="flex-row flex-wrap gap-2 mb-2">
            <Badge title="Seasonal" />
            <Badge title="Top Rated" />
            <Badge title="Wednesday" />
          </View>

          <Text className="text-white text-3xl font-bold">
            Cyber Nexus: Zero
          </Text>

          <Text className="text-[#ddb7ff] mt-2">⭐ 4.9 (12.4k users)</Text>
        </View>
      </View>
    </View>
  );
}

function Badge({ title }: { title: string }) {
  return (
    <View className="bg-[#ddb7ff]/20 px-3 py-1 rounded-full">
      <Text className="text-[#ddb7ff] text-xs font-bold uppercase">
        {title}
      </Text>
    </View>
  );
}
