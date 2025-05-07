import { View, Text, Image, StyleSheet, TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import React from "react";


export default function MoviesComponent({
  title,
  image,
  ratings,
  downloads,
  type,
  download,
  downloadIcon,
  onImagePress,
  onDownloadPress,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
<TouchableOpacity onPress={onImagePress}>
<Image
        source={image}
        style={styles.image}
        {...otherProps}
        resizeMode="cover"
      />
</TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>{type}</Text>
        <Text style={styles.rating}>Ratings: {ratings}</Text>
        <Text>downloads: {downloads}</Text>
        <TouchableWithoutFeedback onPress={onDownloadPress}>
  <View style={styles.downloadLink}>
    <Text style={styles.downloadText}>{download}</Text>
    <Text style={styles.downloadIcon}>{downloadIcon}</Text>
  </View>
</TouchableWithoutFeedback>
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
  rating: {
    color: "orange",
    fontWeight: "bold",
  },
  downloadLink:{
    display:"flex",
    flexDirection:"row",
    color:"white",
    marginTop:20,
    alignItems:"center",
    justifyContent:"space-between",
    padding:5,
    backgroundColor:"green"
  },
  downloadText:{
    color:"white",
    fontWeight:"500",
    textTransform:"capitalize",
  },
  downloadIcon:{
fontWeight:100
  }
});
