import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-slate-900 items-center justify-center p-6">
      <View className="bg-slate-100 dark:bg-slate-800 p-8 rounded-2xl w-full items-center shadow-sm">
        <Text className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Welcome Home!</Text>
        <Text className="text-slate-500 dark:text-slate-400 mb-8 text-center">
          You are securely logged in as{'\n'}
          <Text className="font-semibold text-blue-600 dark:text-blue-400">{user?.email}</Text>
        </Text>

        <TouchableOpacity 
          className="bg-red-500 active:bg-red-600 px-8 py-3 rounded-full"
          onPress={handleLogout}
        >
          <Text className="text-white font-medium">Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
