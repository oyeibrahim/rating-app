//##########################
// Tab Navigation with screens: 
// HomeStackNav.js (Using the Stack Nav as child to this Tab Nav)
// and 
// CriteriaStackNav.js (Using the Stack Nav as child to this Tab Nav)
//##########################

import React from 'react'
import HomeStackNav from './stacks/HomeStackNav';
import CriteriaStackNav from './stacks/CriteriaStackNav';

//Icons
import { Ionicons } from '@expo/vector-icons';

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

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Tab Navigation
const TabNav = createBottomTabNavigator();
//##########################

function CriteriaTabNav() {
    return (
        // screenOptions={{}} states default options for all screen, can be overridden 
        // in each screen
        <TabNav.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                    } else if (route.name === 'Criteria') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            {/* <TabNav.Screen name="Home" component={HomeScreen} options={{ title: 'Hello World !' }} /> */}
            {/* Using the Stack Nav as child to this Tab Nav */}
            <TabNav.Screen name="Home" component={HomeStackNav} />
            <TabNav.Screen name="Criteria" component={CriteriaStackNav} options={{ tabBarBadge: 'New' }} />
        </TabNav.Navigator>
    )
}

export default CriteriaTabNav
