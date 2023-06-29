import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Linking, View, Image, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { launchImageLibrary } from 'react-native-image-picker';


const CreateListing = ({ navigation }) => {
    const [images, setImages] = useState([])

    const goBack = () => {
        navigation.goBack()
    }

    const uploadImage = async () => {
        const result = await launchImageLibrary()
        console.log("Result", result);
        if (result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]))
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0.1, justifyContent: 'flex-start', flexDirection: 'row', marginTop: 20, marginHorizontal: 10, alignItems: 'center' }}>
                <Pressable style={{ width: '25%', marginLeft: 5 }} hitSlop={20} onPress={goBack}>
                    <Image style={{ width: 25, height: 25 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }} />
                </Pressable>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Create a new Listing</Text>
            </View>
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Upload Photos</Text>
                <View style={styles.imageRow}>
                    <TouchableOpacity style={styles.uploadContainer} onPress={uploadImage}>
                        <View style={styles.uploadCircle}>
                            <Text style={styles.uploadAdd}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {images?.map(image => {
                    <Image key={image?.fileName} style={styles.image} source={{ uri: image?.uri }} />
                })}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 24,
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 16,
        color: 'navy',
        marginBottom: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'dotted',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadCircle: {
        width: 32,
        height: 32,
        borderRadius: 20,
        backgroundColor: 'navy',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadAdd: {
        color: 'white',
        fontSize: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
})

export default CreateListing;