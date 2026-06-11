import clsx from "clsx";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";

interface ButtonProps {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({ label, onPress, loading, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      className={clsx(
        "bg-primary rounded-lg z-40 py-4 px-4",
        disabled && "opacity-50",
      )}
      onPress={loading || disabled ? undefined : onPress}
    >
      {loading ? (
        <ActivityIndicator animating={true} color={"#ffffff"} />
      ) : (
        <Text className="text-white text-center text-lg font-medium">
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
