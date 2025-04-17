import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

export default function AppTextInput({icon,placeholder}) {
  return (
    <View style={styles.container}>
        <Text>{icon}</Text>
      <TextInput
      placeholder={placeholder}
      />
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    backgroundColor:'#fff',
    padding:10,
    alignitems:'center'
}
})