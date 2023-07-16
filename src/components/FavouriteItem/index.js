import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FavouriteItem = ({ title, image, onPress, price, icon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.priceTitle}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image style={styles.icon} source={icon || require('../../assets/remove.png')} />
        </TouchableOpacity>
    )
}

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        //alignItems: 'center'
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3'
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
        paddingVertical: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: 'contain',
        marginRight: 20
    },
    priceTitle: {
        flex: 1
    },
    icon: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
        marginVertical: 5,
        marginHorizontal: 5
    },
    price: {
        color: 'black',
        fontSize: 15,
        fontWeight: '700',
        paddingBottom: 5
    }
})

export default FavouriteItem;