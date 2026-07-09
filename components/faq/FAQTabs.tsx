import { ScrollView, TouchableOpacity, Text } from "react-native";

interface Props {
  active: string;
  onChange: (tab: string) => void;
  tabs: string[];
}

export default function FAQTabs({ active, onChange, tabs }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mb-0 h-12 bg-red-300"
    >
      {tabs?.map((tab) => (
        <TouchableOpacity
          key={tab}
          activeOpacity={0.85}
          onPress={() => onChange(tab)}
          className={`mr-3 h-8 px-3 justify-center rounded-2xl ${
            active === tab ? "bg-[#ddb7ff]" : "bg-[#171f33]"
          }`}
        >
          <Text
            className={`font-quicksand-medium ${
              active === tab ? "text-[#490080]" : "text-[#cfc2d6]"
            }`}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
