import { StyleSheet,  FlatList,ScrollView,View,   Dimensions } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


import SafeAreaContainer from "../../components/SafeAreaContainer";
import MoviesComponent from "../../components/MoviesComponent";
import AppTextInput from "../../components/AppTextInput";

export default function MoviesScreen() {

  
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 2 - 20;
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
      <AppTextInput placeholder={'Search...'} icon={<MaterialIcons name="search" size={24} color="black" />
}/>
      <ScrollView contentContainerStyle={styles.listContainer}>
        { movies && movies.map((item, index) => (
          <View key={index} style={[styles.itemContainer, { width: itemWidth }]}>
            <MoviesComponent
              image={item.image}
              title={item.title}
              ratings={item.ratings}
              downloads={item.downloads}
              type={item.type}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10
  },
  itemContainer: {
    marginBottom: 16,
  },
});
