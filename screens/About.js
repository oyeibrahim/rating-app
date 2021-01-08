import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/Global'

const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text>About Page</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
})
