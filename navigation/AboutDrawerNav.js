//##########################
// Drawer Navigation with screens: 
// CriteriaTabNav.js (Using the Tab Nav as child to this Drawer Nav)
// and 
// AboutStackNav.js (Using the Stack Nav as child to this Drawer Nav)
//##########################

import React from 'react'
import CriteriaTabNav from './CriteriaTabNav';
import AboutStackNav from './stacks/AboutStackNav';
import DrawerNavCustomHeader from '../shared_components/DrawerNavCustomHeader';


//########################## For react navigation v5.x
//http://reactnavigation.org/
//npm install @react-navigation/native
//expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

//### Stack Navigator
//npm install @react-navigation/stack

//### Drawer Navigator
//npm install @react-navigation/drawer

//### Tab Navigator
//npm install @react-navigation/bottom-tabs
//##########################

import { createDrawerNavigator } from '@react-navigation/drawer';

//Drawer Navigation
const DrawerNav = createDrawerNavigator();
//##########################

//open and close drawer in each screen
// navigation.openDrawer();
// navigation.closeDrawer();
// or
// navigation.toggleDrawer();
// To know if drawer is open
// import { useIsDrawerOpen } from '@react-navigation/drawer';
// const isDrawerOpen = useIsDrawerOpen();

function AboutDrawerNav() {
    return (
        // screenOptions={{}} states default options for all screen, can be overridden 
        // in each screen
        <DrawerNav.Navigator initialRouteName="Home"
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                labelStyle: {
                    fontSize: 15,
                    fontFamily: 'ubuntu-bold',
                },
                style: {
                    marginVertical: 30
                }
            }}
            drawerStyle={{
                backgroundColor: 'wheat',
            }}
        >
            {/* <TabNav.Screen name="Home" component={HomeScreen} options={{ title: 'Hello World !' }} /> */}
            {/* Using the Tab Nav as child to this Drawer Nav */}
            <DrawerNav.Screen name="Home" component={CriteriaTabNav} options={{ title: 'Home (Reviews List)' }} />
            <DrawerNav.Screen name="About" component={AboutStackNav} options={{ title: 'About Sydewalka' }} />
        </DrawerNav.Navigator>
    )
}

export default AboutDrawerNav
