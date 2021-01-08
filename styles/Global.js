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
        justifyContent:'center'
    },
}

