import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const renderImage = ({ item }) => {
        return (
            <Image style={styles.image} source={{ uri: item }} />
        )
    }

    const handleScrollEnd = (e) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(horizontalOffset / width);
        setActiveIndex(index)
    }

    return (
        <View>
            <FlatList
                onMomentumScrollEnd={handleScrollEnd}
                pagingEnabled
                horizontal
                data={images}
                renderItem={renderImage}
            />
            <View style={styles.pagination}>
                {images?.map((_, i) =>
                    <View key={i}
                        style={[styles.paginationLine, i === activeIndex ? styles.active : {}]}>
                    </View>
                )}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: 400,
        resizeMode: 'contain',
    },
    list: {

    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center'
    },
    paginationLine: {
        height: 4,
        width: 20,
        borerRadius: 10,
        backgroundColor: 'white',
        margin: 5
    },
    active: {
        backgroundColor: 'black',
        width: 30
    }
})

export default Carousel;