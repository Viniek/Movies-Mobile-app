import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import AppTextInput from "../../components/AppTextInput";

const TrendingMoviesScreen = () => {
  return (
    <View>
      <AppTextInput
        placeholder="Search For Trending movies..."
        icon={<MaterialIcons name="search" size={24} color="black" />}
      />
      <Text>Trending Movies Screen</Text>
    </View>
  );
};

export default TrendingMoviesScreen;
