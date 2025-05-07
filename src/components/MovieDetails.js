import { View, Text } from 'react-native'
import React from 'react'

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
    <View>
      <Text>{MovieTitle}</Text>
      <Text>{MovieOverview}</Text>
      <Text>{MovieLanguage}</Text>
      <Text>{MovieImage}</Text>
      <Text>{MovieRatings}</Text>
      <Text>{MovieDownloads}</Text>
      <Text>{MovieType}</Text>
      <Text>{MovieReleaseDate}</Text>
      <Text>{MovieDownloadIcon}</Text>
      <Text>{MovieTitle}</Text>
     
    </View>
  )
}

export default MovieDetails