import React from 'react'
import{
  StyleSheet,
  Text, View, Image,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native'

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View>
      <StatusBar translucent backgroundColor="transparent" />
        <View style={{marginTop : 60, alignItems:'center', justifyContent: 'center'}}>
          <Image source={require("../../assets/icon.png")}
          style={{width:60,height:60}}></Image>
          <Text style={[styles.teks, {marginTop :10, fontWeight:'500'}]}>VLogo</Text>
        </View>

        <View style={{marginTop : 40, flexDirection: "row", justifyContent:'center'}}>
          <TouchableOpacity>
            <View style={styles.sosialButton}>
              <Image source={require("../../assets/facebook.png")}
              style={styles.sosialLogo}></Image>
                <Text style={styles.teks}>Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.sosialButton}>
              <Image source={require("../../assets/gmail.png")}
              style={styles.sosialLogo}></Image>
                <Text style={styles.teks}>Gmail</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={[styles.teks, {color: "#ABB4BD", fontSize : 14,
        textAlign: 'center', marginVertical : 20}]}>
          Or</Text>


        <Text style={[styles.teks, styles.link, {textAlign : 'right'}]}>Forgot Password?</Text>

        <TouchableOpacity style={styles.submitContainer}>
          <Text style={[styles.teks, {color : '#fff', fontWeight: '600',
        fontSize : 16}]}>Login</Text>
        </TouchableOpacity>

        <Text style={[styles.teks, {fontSize : 14, color : "#ABB4BD",
       textAlign : 'center', marginTop : 24}]}>Don't have an account? 
        <Text style={[styles.teks, styles.link]}>Register Now</Text>
        </Text>
      </View>
    </ScrollView>
  )
}

const styles=StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
    paddingHorizontal : 30
  },
  teks : {
    fontFamily: "Avenir Next",
    color : 'black'
   
  },
  sosialButton : {
    flexDirection : 'row',
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal : 30,
    borderWidth : StyleSheet.hairlineWidth,
    borderColor : "rgba(171, 180, 189, 0.65)",
    borderRadius : 4,
    backgroundColor : '#fff',
    shadowColor : "rgba(171, 180, 189, 0.35)",
    shadowOffset : {width : 0, height: 10},
    shadowOpacity : 1,
    shadowRadius: 20,
    elevation : 5
  },
  sosialLogo :{
    width : 20,
    height : 20,
    marginRight : 10
  },
  link : {
    color : '#FF1654',
    fontSize : 14,
    fontWeight : '500'
  },
  submitContainer : {
    backgroundColor : '#ff1654',
    fontSize : 16,
    borderRadius : 4,
    paddingVertical : 12,
    marginTop : 32,
    alignItems : 'center',
    justifyContent :"center",
    shadowColor : 'rgba(255,22,84,0.24)',
    shadowOffset : {width : 0, height : 9},
    shadowOpacity : 1,
    shadowRadius : 20
  }
})