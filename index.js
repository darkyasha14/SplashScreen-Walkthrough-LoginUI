/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './components/intro/SplashScreen'
import IntroSlider from './components/intro/IntroSlider'
import {name as appName} from './app.json';
import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 'SplashScreen'};
        setTimeout(() => {
            this.setState({ currentScreen: 'IntroSlider'})
        },3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'SplashScreen' ? 
        <SplashScreen/> : <IntroSlider/>
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () => Main);
