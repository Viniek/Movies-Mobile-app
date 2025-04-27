import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import React from "react";

const AppButton = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 10,
    alignItems: "center",
  },
  button: {
    color: "#000",

    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
