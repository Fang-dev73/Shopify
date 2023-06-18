import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    title: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: {
        width: 25, 
        height: 25
    }
})

export default styles; 