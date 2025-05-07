import {
  StyleSheet,
  View,
  useWindowDimensions,
  FlatList,
  ActivityIndicator,
  Text,
  Modal,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import Constants from "expo-constants";

import SafeAreaContainer from "../../components/SafeAreaContainer";
import MoviesComponent from "../../components/MoviesComponent";
import AppTextInput from "../../components/AppTextInput";
import MovieDetails from "../../components/MovieDetails";

export default function MoviesScreen() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const API_KEY = Constants.expoConfig.extra.TMDB_API_KEY;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { width: screenWidth } = useWindowDimensions();

  // Dynamically calculate columns
  const minItemWidth = 180; // Minimum desired width per movie card
  const numColumns = Math.max(2, Math.floor(screenWidth / minItemWidth));
  const itemWidth = screenWidth / numColumns - 20;

  const fetchMovies = async (pageNumber = 1) => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`,
      );
      console.log("response array", res.data.results);

      const newMovies = res.data.results;
      if (newMovies.length > 0) {
        setMovies((prev) => [...prev, ...newMovies]);
        setPage(pageNumber + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setError("Failed. Try again later.");
      console.error("Fetch failed:", err);
    }
    setLoading(false);
    setError(null);
  };

  useEffect(() => {
    fetchMovies(page);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  const openOverlay = async (movie) => {
    setSelectedMovie(movie);
    setIsOverlayVisible(true);
  };
  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { width: itemWidth }]}>
      <MoviesComponent
        image={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        title={item.title}
        ratings={item.vote_average}
        downloads={item.vote_count}
        type={item.genre_ids[0]?.toString() || "N/A"}
        download={"Download"}
        downloadIcon={<MaterialIcons name="download" size={24} color="white" />}
        onImagePress={() => openOverlay(item)}
        onDownloadPress={() =>
          alert(`This Feature of downloading: ${item.title} is coming sooon`)
        }
      />
    </View>
  );

  const keyExtractor = (item, index) => item.id?.toString() || index.toString();

  const handleLoadMore = () => fetchMovies(page);

  return (
    <SafeAreaContainer>
      <AppTextInput
        placeholder="Search For Movies..."
        icon={<MaterialIcons name="search" size={1} color="black" />}
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredMovies}
        keyExtractor={keyExtractor}
        numColumns={numColumns}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
        ListEmptyComponent={
          !loading && (
            <View style={styles.emptyContainer}>
              <MaterialIcons name="movie-filter" size={48} color="#888" />
              <Text style={styles.emptyText}>No movies found</Text>
            </View>
          )
        }
      />

      <Modal
        transparent
        visible={isOverlayVisible}
        animationType="fade"
        onRequestClose={() => setIsOverlayVisible(false)}
      >
        {selectedMovie && (
          <View style={styles.overlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}><Button title="X" onPress={() => setIsOverlayVisible(false)} /></View>
              <MovieDetails
                MovieImage={{
                  uri: `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`,
                }}
                MovieTitle={selectedMovie.title}
                MovieOverview={selectedMovie.overview}
                MovieLanguage={selectedMovie.original_language}
                MovieRatings={selectedMovie.vote_average}
                MovieDownloads={selectedMovie.vote_count}
                MovieReleaseDate={selectedMovie.release_date}
              />
            </View>
          </View>
        )}
      </Modal>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  itemContainer: {
    margin: 10,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxHeight: "80%",
    alignItems: "center",
    position: "relative",
  },
  modalHeader: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  marginBottom:10
  },
  
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
  modalCloseBtn:{
    display:"flex",
    justifyContent:"flex-end",
    borderColor:"white"
  }
});
