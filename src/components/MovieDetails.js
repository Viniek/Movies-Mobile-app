import { View, Text ,StyleSheet, Image} from "react-native";
import React from "react";

const MovieDetails = ({
  MovieTitle,
  MovieOverview,
  MovieLanguage,
  MovieImage,
  MovieRatings,
  MovieDownloads,
  MovieType,
  MovieReleaseDate,
  MovieDownloadIcon,
  MovieOnDownloadPress,
}) => {
  return (
    <View style={styles.container}>
    <Image source={MovieImage}
    resizeMethod="cover"/>
      <Text>{MovieTitle}</Text>
      <Text>{MovieOverview}</Text>
      <Text>{MovieLanguage}</Text>
      
      <Text>{MovieRatings}</Text>
      <Text>{MovieDownloads}</Text>
      <Text>{MovieType}</Text>
      <Text>{MovieReleaseDate}</Text>
      <Text>{MovieDownloadIcon}</Text>
      
    </View>
  );
};

export default MovieDetails;
const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"column",


    }
})