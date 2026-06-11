import ScreenWrapper from "@/components/ScreenWrapper";
import Button from "@/components/ui/Button";
import { AppDispatch } from "@/store";
import { loginUser } from "@/store/slices/authSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { toast } from "sonner-native";
import { z } from "zod";

const loginSchema = z.object({
  login: z.string().min(2, "Login must be at least 2 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      const resultAction = await dispatch(
        loginUser({ login: data.login, password: data.password }),
      );
      if (loginUser.fulfilled.match(resultAction)) {
        const isUserEmailVerified =
          resultAction.payload?.user?.email_verified_at;
        if (!isUserEmailVerified) {
          toast.error("Please verify your email to continue");
          return;
        }
        toast.success("Login successful");
      } else {
        if (resultAction.payload) {
          toast.error(resultAction.payload as string);
        } else {
          toast.error("Login failed. Please try again.");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScreenWrapper className="px-4">
      <View className="mt-12 mb-16">
        <Text className="text-3xl font-bold text-black mb-2">Welcome Back</Text>
        <Text className="text-slate-500 dark:text-slate-400">
          Sign in to continue to Medicash
        </Text>
      </View>
      <View>
        <View className="mb-6">
          <Controller
            control={control}
            name="login"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="outlined"
                label="Email or Phone"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={{
                  backgroundColor: "white",
                }}
                textColor="#000"
                activeOutlineColor="#015788"
                outlineColor="#ccc"
                theme={{
                  colors: {
                    primary: "#015788",
                    onSurfaceVariant: "#666", // Inactive label color
                  },
                }}
              />
            )}
          />
          {errors?.login && (
            <Text className="text-red-500 text-xs mt-1">
              {errors?.login?.message}
            </Text>
          )}
        </View>
        <View className="mb-3">
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="outlined"
                label="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                style={{
                  backgroundColor: "white",
                }}
                textColor="#000"
                activeOutlineColor="#015788"
                outlineColor="#ccc"
                secureTextEntry={!showPassword}
                right={
                  <TextInput.Icon
                    icon={showPassword ? "eye-off" : "eye"}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                theme={{
                  colors: {
                    primary: "#015788",
                    onSurfaceVariant: "#666", // Inactive label color
                  },
                }}
              />
            )}
          />
          {errors?.password && (
            <Text className="text-red-500 text-xs mt-1">
              {errors?.password?.message}
            </Text>
          )}
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push("/auth/forgot-password")}
          className="self-end px-1 mb-10"
        >
          <Text className="text-primary font-medium text-md">
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <Button
          label="Sign In"
          loading={isSubmitting}
          disabled={isSubmitting}
          onPress={handleSubmit(onSubmit)}
        />
        <View className="mt-6 gap-1 flex-row justify-center">
          <Text className="text-slate-600 dark:text-slate-400">
            {"Don't"} have an account?
          </Text>
          <Text
            className="text-primary font-medium text-md"
            onPress={() => router.push("/auth/register")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScreenWrapper>
  );
}
