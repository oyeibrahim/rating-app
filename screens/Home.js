import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { globalStyles } from '../styles/Global'
//Data
import { data } from "../db/data";
import ReviewCard from '../shared_components/ReviewCard';

//{ navigation } is from the navigator
const Home = ({ navigation }) => {

    const [reviews, setReviews] = useState(data)

    return (
        <View style={globalStyles.container}>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={reviews}
                renderItem={({ item }) => (
                    //send data with navigation: navigation.navigate('Details', data)
                    //The data will be an object
                    <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                        {/* Custom card created */}
                        <ReviewCard>
                            <Text style={globalStyles.reviewText}>{item.title}</Text>
                        </ReviewCard>
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    titleText: {
        fontFamily: 'ubuntu-bold',
        fontSize: 18,
    }
})
