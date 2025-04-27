import { View, StyleSheet } from "react-native";
import React from "react";
import AppButton from "./AppButton";

const AppNavigator = ({ onCategoryChange }) => {
  const buttons = [
    { title: "All" },
    { title: "Trending" },
    { title: "Action" },
    { title: "Animation" },
    { title: "Horror" },
  ];

  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <AppButton
          key={index}
          title={button.title}
          onPress={() => onCategoryChange(button.title)}
        />
      ))}
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",

    backgroundColor: "#f0f0f0",
  },
});
