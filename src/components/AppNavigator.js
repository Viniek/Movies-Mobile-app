import { View, StyleSheet } from "react-native";
import React from "react";

import AppButton from "./AppButton";

const AppNavigator = () => {
  function handlePress() {
    alert("pressed");
  }
  return (
    <View style={styles.container}>
      <AppButton title="All" onPress={handlePress} />
      <AppButton title="All" onPress={handlePress} />
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
