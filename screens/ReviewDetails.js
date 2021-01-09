import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import ReviewCard from '../shared_components/ReviewCard';
import { globalStyles, ratingImage } from '../styles/Global'

const ReviewDetails = ({ route, navigation }) => {

    //data received from navigation is in route.params.[data]
    const { title, body, rating } = route.params;

    return (
        <View style={globalStyles.container}>
            {/* Custom card created */}
            <ReviewCard>
                <View style={styles.itemNameCont}>
                    {/* styles.itemName also include globalStyles.reviewText, it was */}
                    {/* spread in the StyleSheetbelow */}
                    <Text style={styles.itemName}>{title}</Text>
                </View>
                <Text style={globalStyles.reviewText}>{body}</Text>
                <View style={styles.rating}>
                    <Text>RatingApp Rating:</Text>
                    <Image source={ratingImage.rating[rating]} style={{ width: 89, height: 19 }} />
                </View>
            </ReviewCard>
        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    itemNameCont: {
        paddingBottom: 12,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',

    },
    itemName: {
        ...globalStyles.reviewText,
        alignSelf: 'center',
        borderBottomColor: '#eee',
        fontFamily: 'ubuntu-bold',

    },
    rating: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})
