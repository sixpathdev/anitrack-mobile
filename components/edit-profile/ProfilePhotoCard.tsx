import { View, Image, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  image?: string;
  onChangePhoto?: () => void;
}

export default function ProfilePhotoCard({
  image = "https://i.pravatar.cc/300",
  onChangePhoto,
}: Props) {
  return (
    <View className="items-center mb-10">
      <View className="relative">
        <Image
          source={{ uri: image }}
          className="w-32 h-32 rounded-full border-4 border-[#ddb7ff44]"
        />
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onChangePhoto}
          className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-[#ddb7ff] items-center justify-center"
        >
          <Ionicons name="pencil" size={18} color="#490080" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={onChangePhoto}>
        <Text className="mt-4 text-[#ddb7ff] font-quicksand-medium">
          Change Photo
        </Text>
      </TouchableOpacity>
    </View>
  );
}
