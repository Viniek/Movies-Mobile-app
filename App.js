import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './src/components/AppNavigator';
import MoviesScreen from './src/Screens/MoviesSceen/MoviesScreen';
import ActionMoviesScreen from './src/Screens/MoviesSceen/ActionMoviesScreen';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const renderMoviesScreen = () => {
    switch (selectedCategory) {
      case "Action":
        return <ActionMoviesScreen />;
      case "All":
      default:
        return <MoviesScreen />;
    }
  };

  return (
    <View style={styles.app}>
      <AppNavigator onCategoryChange={setSelectedCategory} />
      {renderMoviesScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
