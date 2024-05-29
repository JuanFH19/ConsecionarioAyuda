import React from 'react'
import { TextInput,Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native'

const DriveTesting = () => {
  return ( 
    <View style={styles.contains}>
      <Text style={styles.title}>' hola '</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contains:{
        flex:1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    title:{
        color: 'rgb(199, 101, 101)',
        fontSize: 40,
        textAlign: 'center'
    },
});

export default DriveTesting;
