import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";

interface AppTextInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  isPassword?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  wrapperClassName?: string;
  inputClassName?: string;
}

export default function AppTextInput<T extends FieldValues>({
  control,
  name,
  label,
  isPassword = false,
  leftIcon,
  rightIcon,
  containerClassName = "mb-6",
  labelClassName = "",
  wrapperClassName = "",
  inputClassName = "",
  ...props
}: AppTextInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
  });

  return (
    <View className={`${containerClassName}`}>
      {label && (
        <Text
          className={`mb-2 text-[12px] font-body font-semibold text-[#cfc2d6] ${labelClassName}`}
        >
          {label}
        </Text>
      )}

      <View className={`relative ${wrapperClassName}`}>
        {leftIcon && (
          <View className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
            {leftIcon}
          </View>
        )}

        <TextInput
          {...props}
          value={field.value}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          secureTextEntry={isPassword && !showPassword}
          placeholderTextColor="#988d9f"
          className={`
            h-12
            rounded-xl
            bg-[#2d3449]
            border
            text-[14px]
            font-body
            text-[#dae2fd]
            ${error ? "border-red-500" : "border-white/10"}
            ${leftIcon ? "pl-10" : "px-2"}
            ${isPassword || rightIcon ? "pr-12" : "pr-2"}
            ${inputClassName}
          `}
          style={{ height: 48 }}
        />

        {isPassword && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowPassword(!showPassword)}
            className="absolute right-0 top-7 -translate-y-1/2 rounded-r-xl py-4 px-3"
          >
            <MaterialIcons
              name={showPassword ? "visibility-off" : "visibility"}
              size={20}
              color="#988d9f"
            />
          </TouchableOpacity>
        )}

        {!isPassword && rightIcon && (
          <View className="absolute right-3 top-1/2 -translate-y-1/2">
            {rightIcon}
          </View>
        )}
      </View>

      {error && (
        <Text className="mt-2 text-xs text-red-400">{error.message}</Text>
      )}
    </View>
  );
}
