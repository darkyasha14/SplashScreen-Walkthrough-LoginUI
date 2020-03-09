import React from 'react';
import { StyleSheet, View, Text, Image, I18nManager, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import Logins from '../auth/Login'

I18nManager.forceRTL(false);

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width : 300,
    height: 300,
    resizeMode : 'stretch'
    
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Quick setup, good defaults',
    text:
      'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
    colors: ['#63E2FF', '#212F3D'],
    image : require('../../assets/img1.png')
  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text:
      'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    colors: ['#F1C40F', '#212F3D'],
    image : require('../../assets/icn.png')
  },
  {
    key: 'somethun2',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    colors: ['#29ABE2', '#212F3D'],
    image : require('../../assets/img2.png')
  },
];

export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            showApp : false
        }
    }

    
    _onDone = () => {
        this.setState({ showApp: true })
    }

  _renderItem = ({ item, dimensions }) => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          flex: 1,
          paddingTop: item.topSpacer,
          paddingBottom: item.bottomSpacer,
          width: dimensions.width,
        },
      ]}
      colors={item.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <Image
        style={styles.image}
        source={item.image}
        size={200}
      />
      <View>
      <StatusBar translucent backgroundColor="transparent" />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </LinearGradient>
  );

  render() {
      if(this.state.showApp) {
          return(
                <Logins/>
          ) 
      }else
      { 
        return <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        showPrevButton
        showSkipButton
        onDone = {this._onDone}
    
      /> 
      }
   
  }
}