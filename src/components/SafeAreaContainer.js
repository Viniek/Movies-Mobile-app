import { SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";
import React from "react";

export default function SafeAreaContainer({ children }) {
  return (
    <SafeAreaView style={styles.SafeAreaContainer}>{children}</SafeAreaView>
  );
}
const styles = StyleSheet.create({
  SafeAreaContainer: {
    backgroundColor: "#f8f4f4",
    paddingHorizontal: 10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 3 : 5,
    flex: 1,
  },
});
