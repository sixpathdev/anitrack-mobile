import AsyncStorage from "@react-native-async-storage/async-storage";

const ONBOARDING_COMPLETED_KEY = "onboarding_completed";

/**
 * Check if the user has completed onboarding
 */
export const hasCompletedOnboarding = async (): Promise<boolean> => {
  try {
    const completed = await AsyncStorage.getItem(ONBOARDING_COMPLETED_KEY);
    return completed === "true";
  } catch (error) {
    console.error("Error checking onboarding status:", error);
    return false;
  }
};

/**
 * Mark onboarding as completed
 */
export const completeOnboarding = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(ONBOARDING_COMPLETED_KEY, "true");
  } catch (error) {
    console.error("Error marking onboarding as completed:", error);
  }
};

/**
 * Reset onboarding status (for testing or manual reset)
 */
export const resetOnboarding = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(ONBOARDING_COMPLETED_KEY);
  } catch (error) {
    console.error("Error resetting onboarding:", error);
  }
};
