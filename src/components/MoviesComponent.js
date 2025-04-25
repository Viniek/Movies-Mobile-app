import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function MoviesComponent({
  title,
  image,
  ratings,
  downloads,
  type,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
        {...otherProps}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text >{type}</Text>
        <Text style={styles.rating}>Ratings: {ratings}</Text>
        <Text>downloads: {downloads}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2, // for Android shadow
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  info: {
    padding: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  rating:{
    color:'orange',
    fontWeight: "bold",
  }
});
