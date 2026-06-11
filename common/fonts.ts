import * as Font from "expo-font";

export const loadFonts = async () => {
  try {
    await Font.loadAsync({
      "Quicksand-Regular": require("@/assets/fonts/Quicksand-Regular.ttf"),
      "Quicksand-Medium": require("@/assets/fonts/Quicksand-Medium.ttf"),
      "Quicksand-Bold": require("@/assets/fonts/Quicksand-Bold.ttf"),
      "Quicksand-ExtraBold": require("@/assets/fonts/Quicksand-ExtraBold.ttf"),
    });
  } catch (error) {
    console.error("Error loading fonts:", error);
  }
};
