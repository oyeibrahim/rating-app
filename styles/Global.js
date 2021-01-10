import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'ubuntu-bold',
        fontSize: 18,
        color: '#333'
    },
    reviewText: {
        fontFamily: 'ubuntu-regular',
        fontSize: 16,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    }
})

//for all stack nav headers
export const stackNavStyles = {
    //Header background
    headerStyle: {
        backgroundColor: 'chocolate',
    },
    //Header Text and Back Button color
    headerTintColor: '#fff',
    //Header Text
    headerTitleStyle: {
        // fontWeight: 'bold',
        fontFamily: 'ubuntu-regular',
        justifyContent: 'center'
    },
}

//dynamically get the image
export const ratingImage = {
    rating: {
        1: require('../assets/rating-1.png'),
        2: require('../assets/rating-2.png'),
        3: require('../assets/rating-3.png'),
        4: require('../assets/rating-4.png'),
        5: require('../assets/rating-5.png'),
    }
}


