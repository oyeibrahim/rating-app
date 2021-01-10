import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from "../styles/Global";
import { Formik } from "formik";

const ReviewForm = () => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(props) => (
                    <View>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Item Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Item Review'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Item Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />

                        <Button
                            title='submit'
                            color='chocolate'
                            onPress={props.handleSubmit}
                        />

                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm
