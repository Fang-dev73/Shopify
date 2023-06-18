import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CategoryBox = ({ title, image, onPress, isFirst, isSelected, image2 }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, isFirst ? { marginHorizontal: 15 } : null]}>
            <View style={[styles.imageContainer, isSelected ? {backgroundColor: 'navy'} : {backgroundColor: 'white'}]}>
                <Image style={styles.image} source={image} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 14,
        fontWeight: '500'
    },
    image: {
        width: 24,
        height: 24
    },
    imageContainer: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'navy'
    }
})

export default CategoryBox;