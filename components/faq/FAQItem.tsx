import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ChevronDown, ChevronUp } from "lucide-react-native";

interface Props {
  question: string;
  answer: string;
  tags?: string[];
  premium?: boolean;
}

export default function FAQItem({
  question,
  answer,
  tags = [],
  premium,
}: Props) {
  const [expanded, setExpanded] = useState(false);


  return (
    <View
      className={`bg-[#171f33] rounded-2xl mb-4 ${
        expanded ? "border border-[#ddb7ff55]" : ""
      }`}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setExpanded(!expanded)}
        className="flex-row justify-between items-center p-5"
      >
        <Text className="text-white font-quicksand-medium flex-1 pr-4">
          {question}
        </Text>

        {expanded ? (
          <ChevronUp size={22} color="#ddb7ff" />
        ) : (
          <ChevronDown size={22} color="#ddb7ff" />
        )}
      </TouchableOpacity>

      {expanded && (
        <View className="px-5 pb-5">
          <Text className="text-[#cfc2d6] leading-6">{answer}</Text>

          {tags?.length > 0 && (
            <View className="flex-row mt-4">
              {tags.map((tag) => (
                <View
                  key={tag}
                  className="mr-2 bg-[#ddb7ff22] rounded-full px-3 py-1"
                >
                  <Text className="text-[#ddb7ff] text-xs font-quicksand-medium">
                    {tag}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {premium && (
            <TouchableOpacity
              activeOpacity={0.85}
              className="bg-[#ddb7ff] mt-5 rounded-xl py-3"
            >
              <Text className="text-center text-[#490080] font-quicksand-bold">
                Upgrade to Elite
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}
