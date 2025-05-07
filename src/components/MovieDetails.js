import { View, Text, StyleSheet, Image } from "react-native";
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
      <View style={styles.MovieImageContainer}><Image source={MovieImage} resizeMode="cover" style={styles.MovieImage} /></View>
      <Text style={styles.title}>{MovieTitle}</Text>
      <Text style={styles.MovieText}>Overview: {MovieOverview}</Text>
      <Text  style={styles.MovieText}> Language: {MovieLanguage}</Text>

      <Text  style={styles.MovieText}> Ratings: {MovieRatings}</Text>
      <Text  style={styles.MovieText}> Downloads: {MovieDownloads}</Text>
       <Text  style={styles.MovieText}>Release Date: {MovieReleaseDate}</Text>
      <Text>{MovieDownloadIcon}</Text>
    </View>
  );
};

export default MovieDetails;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap:10,
    maxHeight:'100%'
  },
  MovieImageContainer:{
    width: '100%',
    borderColor:'blue',
    height: 300,
    paddingTop:30,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  MovieImage:{
    
    width: '100%',
    height: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  MovieText:{
    fontWeight:'500',
    textTransform:'capitalize',
    fontSize:20,
  },
});
