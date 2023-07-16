import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, Linking, View, Image, TouchableOpacity, Pressable, ActivityIndicator, TextInput, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../../components/Header";
import { launchImageLibrary } from 'react-native-image-picker';
import Input from "../../../components/Input";
import { categories } from "../../../data/categories";
import Button from "../../../components/Button";


const CreateListing = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState([])
    const [values, setValues] = useState({})

    const goBack = () => {
        navigation.goBack()
    }

    const uploadImage = async () => {
        setLoading(true)
        const result = await launchImageLibrary()
        console.log("Result", result);
        console.log("Images>>>>>", images);
        if (result?.assets?.length) {
            setImages(list => ([...list, ...result?.assets]))
            setLoading(false)
        }
    }

    const deleteImage = (image) => {
        setImages((list) => {
            console.log("LISt>>>>>", list);
            const filteredImages = list.filter(img => img?.fileName !== image?.fileName);
            return filteredImages
        })
    }

    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }))
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ height: 30, justifyContent: 'flex-start', flexDirection: 'row', marginTop: 20, marginHorizontal: 10, alignItems: 'center' }}>
                <Pressable style={{ width: '25%', paddingLeft: 5 }} hitSlop={20} onPress={goBack}>
                    <Image style={{ width: 25, height: 25 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }} />
                </Pressable>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Create a new Listing</Text>
            </View>
            <ScrollView style={styles.container}>
                <KeyboardAvoidingView behavior="height">
                    <Text style={styles.sectionTitle}>Upload Photos</Text>
                    <View style={styles.imageRow}>
                        <TouchableOpacity style={styles.uploadContainer} onPress={uploadImage}>
                            <View style={styles.uploadCircle}>
                                <Text style={styles.uploadAdd}>+</Text>
                            </View>
                        </TouchableOpacity>
                        {images?.map(image => (
                            <TouchableOpacity disabled={loading} onPress={() => deleteImage(image)}>
                                <Image key={image?.fileName} style={styles.image} source={{ uri: image?.uri }} />
                                <Image style={styles.delete} source={require('../../../assets/cancel.png')} />
                            </TouchableOpacity>
                        ))}
                        {loading && <ActivityIndicator />}
                    </View>
                    <ScrollView style={{ height: 420, marginVertical: 10 }}>
                        <Input placeholder={'Listing title'} label={'Title'} value={values.title} onChangeText={(v) => onChange(v, 'title')} />
                        <Input placeholder={'Select Category'} label={'Category'} value={values.category} onChangeText={(v) => onChange(v, 'category')} type={'picker'} options={categories} />
                        <Input placeholder={'Enter Price'} keyboardType={'numeric'} label={'Price'} value={values.price} onChangeText={(v) => onChange(v, 'price')} />
                        <Text style={{ marginLeft: 10, fontSize: 20, color: 'navy', fontWeight: '600' }}>Description</Text>
                        <TextInput placeholderTextColor={'black'} style={{ width: '95%', borderRadius: 10, minHeight: 100, borderWidth: 1, marginLeft: 2, marginTop: 2, alignSelf: 'center' }} textAlignVertical={'top'} multiline={true} placeholder={'Add Description'} label={'Description'} value={values.description} onChangeText={(v) => onChange(v, 'description')} />
                    </ScrollView>
                </KeyboardAvoidingView>
                <Button title={'Submit'} />
                <View style={{height: 10}}/>
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
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10
    },
    uploadContainer: {
        width: 100,
        height: 100,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'dotted',
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
        flexWrap: 'wrap',
    },
    delete: {
        width: 22,
        height: 22,
        position: 'absolute',
        right: 0
    }
})

export default CreateListing;