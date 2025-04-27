import { View, Text } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import AppTextInput from "../../components/AppTextInput";

const ActionMoviescreen = () => {
  return (
    <View>
      <AppTextInput
        placeholder="Search For Action movies..."
        icon={<MaterialIcons name="search" size={24} color="black" />}
      />
      <Text>Action Movies Page</Text>
    </View>
  );
};

export default ActionMoviescreen;
