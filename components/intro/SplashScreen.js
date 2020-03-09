import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, StatusBar } from 'react-native'

export default function SplashScreen() {
    return (
      <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />
        <Image style={styles.image} 
        source={require('../../assets/intro.png')}/>
        <Text style={{marginTop: 30, fontSize : 20}}>VLogo</Text>
      </View>
    )
  }


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    image : {
        resizeMode : 'stretch'
    }
})
