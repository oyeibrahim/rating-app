// Stack Nav must be use for each grouping to obtain the default header
//##########################
// Stack Navigation with screens: 
// Home.js 
// and 
// ReviewDetails.js
//##########################

import React from 'react'
import HomeScreen from "../../screens/Home";
import ReviewDetails from '../../screens/ReviewDetails';
import { stackNavStyles } from "../../styles/Global";
import DrawerNavCustomHeader from '../../shared_components/DrawerNavCustomHeader';

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

function HomeStackNav() {
    return (
        // screenOptions={{}} states default options for all screen, can be overridden 
        // in each screen
        <StackNav.Navigator initialRouteName="Home" screenOptions={stackNavStyles}>
            <StackNav.Screen name="Home" component={HomeScreen}
                options={({ navigation }) => ({
                    headerTitle: () => {
                        return <DrawerNavCustomHeader title='Reviews List' navigation={navigation} />
                    }
                })}
            />
            <StackNav.Screen name="Details" component={ReviewDetails} />
        </StackNav.Navigator>
    )
}

export default HomeStackNav

// const stackNavStyles = {
//     //Header background
//     headerStyle: {
//         backgroundColor: 'chocolate',
//     },
//     //Header Text and Back Button color
//     headerTintColor: '#fff',
//     //Header Text
//     headerTitleStyle: {
//         // fontWeight: 'bold',
//         fontFamily: 'ubuntu-regular',
//         justifyContent: 'center'
//     },
// }