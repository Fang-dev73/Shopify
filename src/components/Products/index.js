import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Products = ({ title, image, onPress, price }) => {
    return (
        <TouchableOpacity activeOpacity={0.1} onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </TouchableOpacity>
    )
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({

    container: {
        margin: 10,
        //alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        paddingVertical: 5
    },
    image: {
        width: (width - 60) / 2,
        height: 200,
        borderRadius: 15,
        resizeMode: 'contain',
        justifyContent: 'space-between'
    },
    price: {
        color: 'black',
        fontSize: 15,
        fontWeight: '700',
        paddingBottom: 5
    }
})

export default Products;