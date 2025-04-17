import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function AppTextInput({icon,placeholder}) {
  return (
    <View>
        <Text>{icon}</Text>
      <TextInput
      placeholder={placeholder}
      />
    </View>
  )
}
const styles = StyleSheet.create({

})