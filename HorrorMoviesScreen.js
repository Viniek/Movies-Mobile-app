import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import AppTextInput from "./src/components/AppTextInput";

const HorrorMoviesScreen = () => {
  return (
    <View>
      <AppTextInput
        placeholder="Search For Horror movies..."
        icon={<MaterialIcons name="search" size={24} color="black" />}
      />
      <Text>Horror Movies Screen</Text>
    </View>
  );
};

export default HorrorMoviesScreen;
