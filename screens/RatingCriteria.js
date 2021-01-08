import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/Global'

const RatingCriteria = () => {
    return (
        <View style={globalStyles.container}>
            <Text>Rating Criteria Page</Text>
        </View>
    )
}

export default RatingCriteria

const styles = StyleSheet.create({
    container: {
        padding: 24,
    }
})
