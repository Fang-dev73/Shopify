import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ListItem = ({title, subtitle, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style= {styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <Image style={styles.arrow} source={require('../../assets/right-arrow.png')}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
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
    arrow: {
        width: 20,
        height: 20
    },
    title: {
        color: 'navy',
        fontWeight: '500',
        fontSize: 18,
        marginBottom: 6
    },
    subtitle: {
        color: 'grey',
        fontSize: 14
    }
})

export default ListItem;