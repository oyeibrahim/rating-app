import React from 'react'
import { StyleSheet, Image } from 'react-native'

const CustomHeaderBgImage = () => {
    return (
        <Image
            source={require('../assets/rating_bg7.jpg')}
            style={styles.design}
        />
    )
}

export default CustomHeaderBgImage

const styles = StyleSheet.create({
    design: {
        width: '100%',
        height: '100%'
    }
})
