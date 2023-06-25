import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';

const EditableBox = ({label, onPress, value, onChangeText, editable}) => {
    return(
        <View onPress={onPress} style={styles.container}>
            <View style= {styles.content}>
                <Text style={styles.label}>{label}</Text>
                <TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity:0.29,
        shadowRadius: 4.65,
        elevation: 7,
        backgroundColor: 'white',
        marginVertical: 12,
        borderRadius: 4
    },
    label: {
        color: 'grey',
        fontSize: 16
    },
    input: {
        color: 'navy',
        fontSize: 15,
        fontWeight: '500'
    }
})

export default EditableBox;