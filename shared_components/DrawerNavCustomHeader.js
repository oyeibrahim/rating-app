//Custom header for drawer navigation

import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";

const DrawerNavCustomHeader = ({ navigation, title }) => {

    const openDrawerNav = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>

            {/* icon for drawer nav */}
            <MaterialIcons name='menu' size={28}
                onPress={openDrawerNav}
                style={styles.icon}
            />

            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{title}</Text>
                <Image
                    source={require('../assets/3d-heart.png')}
                    style={styles.headerImage}
                />
            </View>

        </View>
    )
}

export default DrawerNavCustomHeader

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        // fontWeight: 'bold',
        fontFamily: 'ubuntu-bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 6
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 30,
        height: 26,
        marginHorizontal: 10,
    }
})
