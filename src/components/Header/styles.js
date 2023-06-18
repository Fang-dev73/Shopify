import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 25,
        paddingVertical: 20,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',   
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