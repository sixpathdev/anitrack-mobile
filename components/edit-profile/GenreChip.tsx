import { Pressable, Text } from "react-native";

interface Props {
  title: string;
  selected: boolean;
  onPress: () => void;
}

export default function GenreChip({ title, selected, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={`px-4 py-2 rounded-full mr-2 mb-2 border ${
        selected
          ? "bg-[#ddb7ff22] border-[#ddb7ff66]"
          : "bg-[#2d344933] border-[#ffffff10]"
      }`}
    >
      <Text
        className={`font-quicksand-bold text-xs ${
          selected ? "text-[#ddb7ff]" : "text-[#cfc2d6]"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}
