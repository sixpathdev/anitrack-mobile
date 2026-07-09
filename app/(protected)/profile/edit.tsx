import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";

import ProfilePhotoCard from "@/components/edit-profile/ProfilePhotoCard";
import GenreSelector from "@/components/edit-profile/GenreSelector";
import SaveButton from "@/components/edit-profile/SaveButton";
import DeactivateButton from "@/components/edit-profile/DeactivateButton";
import { Ionicons } from "@expo/vector-icons";
import { genres as initialGenres } from "@/datasource/genres";
import GenreChip from "@/components/edit-profile/GenreChip";

export default function EditProfileScreen() {
  const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/300");
  const [genres, setGenres] = useState(initialGenres);

  const toggleGenre = (id: string) => {
    setGenres((prev) =>
      prev.map((genre) =>
        genre.id === id ? { ...genre, selected: !genre.selected } : genre,
      ),
    );
  };

  const handleChangePhoto = () => {
    console.log("Open image picker");
  };

  const handleSave = () => {
    console.log("Save profile");
  };

  const handleDeactivate = () => {
    console.log("Deactivate account");
  };

  return (
    <ScreenWrapper
      bg="#0b1326"
      scroll
      className="px-4"
      includeTopSafeArea={false}
    >
      <ProfilePhotoCard
        image={profileImage}
        onChangePhoto={handleChangePhoto}
      />

      <View className="mb-6">
        <Text className="text-[#cfc2d6] mb-2 font-quicksand-medium">
          Full Name
        </Text>
        <TextInput
          defaultValue="Arata_Saito"
          placeholder="Enter full name"
          placeholderTextColor="#7f8698"
          className="bg-[#171f33] rounded-xl px-4 py-4 text-white"
        />
      </View>
      <View className="mb-6">
        <Text className="text-[#cfc2d6] mb-2 font-quicksand-medium">
          Username
        </Text>
        <TextInput
          defaultValue="sixpathdev"
          placeholder="Enter username"
          placeholderTextColor="#7f8698"
          className="bg-[#171f33] rounded-xl px-4 py-4 text-white"
        />
      </View>
      <View className="mb-6">
        <Text className="text-[#cfc2d6] mb-2 font-quicksand-medium">BIO</Text>
        <TextInput
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          defaultValue="Digital architect by day, seasonal anime binge-watcher by night. Currently tracking 14 active series."
          placeholder="Tell the world about your anime journey..."
          placeholderTextColor="#7f8698"
          className="bg-[#171f33] rounded-xl px-4 py-4 text-white min-h-[120px]"
        />
      </View>
      <View className="mb-8">
        <Text className="text-[#cfc2d6] mb-2 font-quicksand-medium">
          EMAIL ADDRESS
        </Text>
        <View className="bg-[#171f33] rounded-xl flex-row items-center px-4">
          <Ionicons name="lock-closed" size={18} color="#cfc2d6" />
          <TextInput
            editable={false}
            value="arata.saito@neotrack.io"
            className="flex-1 ml-3 py-4 text-[#cfc2d6]"
          />
        </View>
        <Text className="text-[#7f8698] text-xs mt-2">
          Email cannot be changed for security reasons.
        </Text>
      </View>
      <View className="mb-8">
        <Text className="text-[#cfc2d6] font-quicksand-medium mb-3">
          FAVORITE GENRES
        </Text>
        <View className="flex-row flex-wrap">
          {genres?.map((genre) => (
            <GenreChip
              key={genre.id}
              {...genre}
              onPress={() => toggleGenre(genre.id)}
            />
          ))}
          <Pressable className="w-10 h-10 rounded-full bg-[#171f33] items-center justify-center">
            <Ionicons name="add" size={20} color="#ddb7ff" />
          </Pressable>
        </View>
      </View>
      <SaveButton onPress={handleSave} />
      <DeactivateButton onPress={handleDeactivate} />
    </ScreenWrapper>
  );
}
