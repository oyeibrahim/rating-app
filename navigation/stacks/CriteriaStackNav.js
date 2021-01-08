// Stack Nav must be use for each grouping to obtain the default header
//##########################
// Stack Navigation with screens: 
// RatingCriteria.js 
//##########################

import React from 'react'
import RatingCriteria from '../../screens/RatingCriteria';
import { stackNavStyles } from "../../styles/Global";
// import DrawerNavCustomHeader from '../../shared_components/DrawerNavCustomHeader';

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

import { createStackNavigator } from '@react-navigation/stack';

//Stack Navigation
const StackNav = createStackNavigator();
//##########################

function CriteriaStackNav() {
    return (
        // screenOptions={{}} states default options for all screen, can be overridden 
        // in each screen
        <StackNav.Navigator initialRouteName="Criteria" screenOptions={stackNavStyles}>
            <StackNav.Screen name="Criteria" component={RatingCriteria} options={{ title: 'Rating Criteria' }} />
        </StackNav.Navigator>
    )
}

export default CriteriaStackNav