import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import AppTextInput from './src/components/AppTextInput'

const AnimationMoviesScreen = () => {
  return (
    <View>
         <AppTextInput placeholder ='Search For Animation movies...'   icon={<MaterialIcons name="search" size={24} color="black" />}/>
      <Text>Animation Movies Screen</Text>
    </View>
  )
}

export default AnimationMoviesScreen