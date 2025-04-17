import { StyleSheet,  FlatList } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import SafeAreaContainer from "../../components/SafeAreaContainer";
import MoviesComponent from "../../components/MoviesComponent";
export default function MoviesScreen() {
  const movies = [
    {
      image: require("../../assets/squidgame.jpeg"),
      title: "Squid Game",
      ratings: 7.5,
      downloads: "100",
      type: "Action",
    },
    {
      image: require("../../assets/inception.jpeg"),
      title: "Inception",
      ratings: 8.8,
      downloads: "500",
      type: "Sci-Fi",
    },
    {
      image: require("../../assets/interstellar.jpeg"),
      title: "Interstellar",
      ratings: 8.6,
      downloads: "450",
      type: "Sci-Fi",
    },
    {
      image: require("../../assets/avatar.jpeg"),
      title: "Avatar",
      ratings: 7.8,
      downloads: "600",
      type: "Fantasy",
    },
    {
      image: require("../../assets/joker.jpeg"),
      title: "Joker",
      ratings: 8.5,
      downloads: "300",
      type: "Drama",
    },
    {
      image: require("../../assets/parasite.jpeg"),
      title: "Parasite",
      ratings: 8.6,
      downloads: "250",
      type: "Thriller",
    },
    {
      image: require("../../assets/spiderman.jpeg"),
      title: "Spider-Man: No Way Home",
      ratings: 8.3,
      downloads: "700",
      type: "Action",
    },
    {
      image: require("../../assets/batman.jpeg"),
      title: "The Batman",
      ratings: 7.9,
      downloads: "400",
      type: "Action",
    },
    {
      image: require("../../assets/blackpanther.jpeg"),
      title: "Black Panther",
      ratings: 7.3,
      downloads: "350",
      type: "Adventure",
    },
    {
      image: require("../../assets/strangerthings.jpeg"),
      title: "Stranger Things",
      ratings: 8.7,
      downloads: "800",
      type: "Mystery",
    },
  ];

  return (
    <SafeAreaContainer>
      <FlatList
        key={"grid-3"} // This key must be unique when numColumns changes
        numColumns={3}
        contentContainerStyle={styles.listContainer}
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <MoviesComponent
            image={item.image}
            title={item.title}
            ratings={item.ratings}
            downloads={item.downloads}
            type={item.type}
          />
        )}
      />

      {/* <MaterialIcons name="18-up-rating" size={24} color="black" /> */}
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // flexWrap:'wrap',
  },
});
