import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import ReviewCard from '../shared_components/ReviewCard';
import { globalStyles } from '../styles/Global'

const ReviewDetails = ({ route, navigation }) => {

    //data received from navigation is in route.params.[data]
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            {/* Custom card created */}
            <ReviewCard>
                {/* grab navigation data */}
                <Text style={globalStyles.reviewText}>{title}</Text>
                <Text style={globalStyles.reviewText}>{body}</Text>
                <Text style={globalStyles.reviewText}>{rating}</Text>
            </ReviewCard>
        </View>
    )
}

export default ReviewDetails
