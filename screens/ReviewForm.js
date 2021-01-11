import React from 'react'
import { ActionSheetIOS, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from "../styles/Global";
import { Formik } from "formik";
import * as yup from 'yup'
import CustomButton from '../shared_components/CustomButton';


const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        })
})

//get addReview function passed as prop
const ReviewForm = ({ addReview }) => {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                //use the validation schema to validate the form
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    //use the addReview function to submit the form
                    addReview(values);
                }}
            >
                {(props) => (
                    <View>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Item Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>
                            {props.touched.title && props.errors.title}
                        </Text>

                        <TextInput
                            multiline
                            minHeight={70}
                            style={globalStyles.input}
                            placeholder='Item Review'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>
                            {props.touched.body && props.errors.body}
                        </Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Item Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>
                            {props.touched.rating && props.errors.rating}
                        </Text>

                        {/* <Button
                            title='submit'
                            color='chocolate'
                            onPress={props.handleSubmit}
                        /> */}
                        <CustomButton
                            text='submit'
                            onPress={props.handleSubmit}
                        />

                    </View>
                )}
            </Formik>
        </View>
    )
}

export default ReviewForm
