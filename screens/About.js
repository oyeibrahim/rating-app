import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/Global'

const About = () => {
    return (
        <View style={globalStyles.container}>
            <Text>About Page</Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus vel rutrum magna. Duis et luctus sapien. Aenean
                semper lacus vitae tempor tincidunt. Praesent efficitur at
                lacus in facilisis. Etiam feugiat scelerisque ipsum et
                tempor. Curabitur ipsum nisl, maximus vel luctus eget,
                laoreet quis tellus. Ut aliquet, arcu sit amet luctus
                pulvinar, ipsum justo hendrerit eros, ac suscipit tellus
                lectus quis neque. Etiam non nisi sagittis, ultricies elit
                at, semper arcu. Duis cursus mattis lacus, porttitor sodales
                purus pellentesque eu. Donec nec enim in augue rutrum cursus.
                Suspendisse potenti. Duis eleifend dui non ex imperdiet
                gravida. Proin semper hendrerit libero, eget bibendum arcu rhoncus eu.
            </Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
})
