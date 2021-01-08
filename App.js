import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
//to display and do something when app still loading //expo install expo-app-loading
import AppLoading from 'expo-app-loading'

//########################## For react navigation v5.x
import { NavigationContainer } from '@react-navigation/native';
//##########################

import HomeStackNav from './navigation/stacks/HomeStackNav';
import CriteriaTabNav from './navigation/CriteriaTabNav';
import AboutDrawerNav from './navigation/AboutDrawerNav';


//load font
const getFonts = () => {
  return Font.loadAsync({
    'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  })
}

export default function App() {

  //to get when font has been loaded
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {//only load app when fonts have been loaded

    return (
      <NavigationContainer>

        {/* rendering the Stack Nav itself */}
        {/* <HomeStackNav /> */}

        {/* Tab Nav */}
        {/* Has the Stack Nav as Child */}
        {/* <CriteriaTabNav /> */}

        {/* Drawer Nav */}
        {/* Has the Tab Nav as Child */}
        <AboutDrawerNav />

        <StatusBar style="auto" />

      </NavigationContainer>
    );

  } else {//use AppLoading to load fonts. onFinish and onError define what to 
    //do when the function in startAsync either completes or encounters an error

    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => setFontsLoaded(false)}
      />
    )

  }

}
