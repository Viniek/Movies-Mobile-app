import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function AppSearchInput({
  icon,
  placeholder,
  title,
  onPress,
  onChangeText,
  ...otherProps
}) {
  const width = Dimensions.get("window").width;
  const inputWidth = width - 20;

  return (
    <View style={[styles.container, { width: inputWidth }]}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        {...otherProps}
      />
      {icon && (
        <TouchableOpacity style={styles.icon} onPress={onPress}>
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
  },
});
