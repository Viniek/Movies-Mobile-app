import { View, StyleSheet } from "react-native";
import React from "react";

import AppButton from "./AppButton";

const AppNavigator = () => {

    const buttons =[
{
    title:'All',
    handlePress: function(){alert('All');
    }
},
{
    title:'Action',
    handlePress: function(){alert('Action');
    } 
},
{
    title:'Trending',
    handlePress: function(){alert('trnding');
    } 
},
{
    title:'Horror',
    handlePress: function(){alert('horror');
    } 
},
{
    title:'Animation',
    handlePress: function(){alert('Animation');
    } 
},
]

  return (
    <View style={styles.container}>

        {buttons && buttons.map((button,index)=><AppButton key={index} title={button.title} onPress={button.handlePress}/>)}
    
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
