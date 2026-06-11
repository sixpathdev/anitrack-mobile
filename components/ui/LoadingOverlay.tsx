import React from "react";
import { StyleSheet, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const LoadingOverlay = ({ loading }) => {
  return (
    <View style={styles.container}>
      <Spinner
        visible={loading}
        // textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: "absolute",

    // backgroundColor: '#f5fcff12',
  },
});
