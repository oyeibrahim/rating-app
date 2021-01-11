import React, { useState } from 'react'
import { FlatList, Keyboard, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { globalStyles } from '../styles/Global'
//Data
import { data } from "../db/data";
import ReviewCard from '../shared_components/ReviewCard';
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from './ReviewForm';

//{ navigation } is from the navigator
const Home = ({ navigation }) => {

    const [modalOpen, setModalOpen] = useState(false)

    const [reviews, setReviews] = useState(data)

    //used in ReveiewForm
    const addReview = (review) => {
        setReviews((currentReviews) => {
            // to get incrementing id so ids won't match
            // this creates a new field id in the JSON
            review.id = parseInt(currentReviews[currentReviews.length - 1].id) + 1
            return [...currentReviews, review]
        });
        // close modal after review submission
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => { setModalOpen(false) }}
                        />

                        {/* pass addReview funtion as prop */}
                        <ReviewForm addReview={addReview} />

                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => { setModalOpen(true) }}
            />

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
    modalContent: {
        flex: 1,
    },
    modalToggle: {
        color: 'green',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'chocolate',
        borderStyle: 'dotted',
        padding: 5,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
        color: 'red'
    }
})
