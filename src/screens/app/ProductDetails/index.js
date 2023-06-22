import React, { useState } from "react";
import { ScrollView, Text, Image, StyleSheet, View, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Carousel from "../../../components/Carousel";

const ProductDetails = ({ navigation, route }) => {
    const product = route?.params?.product;
    const [bookMark, setBookMark] = useState(false)

    const onContact = () => {
        const phone = 9619494534
        Linking.openURL(`tel: ${phone}`);
        const mail = 'narulayash994@gmail.com'
        Linking.openURL(`mailto: ${mail}`)
    }


    return (
        <SafeAreaView>
            <ScrollView>
                {product?.images?.length ?
                    <Carousel images={product?.images} />
                    :
                    <Image style={styles.image} source={{ uri: product?.image }} />
                }
                <Text style={{ fontWeight: '700', color: 'black', fontSize: 20, marginVertical: 10, marginHorizontal: 10 }}>{product?.title}</Text>
                <Text style={{ fontWeight: '700', color: 'black', fontSize: 22, marginVertical: 5, marginHorizontal: 5 }}>{product?.price}</Text>
                <Text style={{ fontWeight: '500', color: 'black', fontSize: 16, marginVertical: 30, marginHorizontal: 10 }}>{product?.description}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ width: 40, height: 40, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 10, position: 'absolute', margin: 15 }}>
                    <Image style={{ width: 20, height: 20 }} source={require('../../../assets/back.png')} />
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.footer}>
                {bookMark ?
                    <TouchableOpacity onPress={() => setBookMark(!bookMark)} style={{ width: 50, height: 50, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../../assets/bookmark_navy.png')} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => setBookMark(!bookMark)} style={{ width: 50, height: 50, backgroundColor: '#D3D3D3', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../../assets/bookmark_white.png')} />
                    </TouchableOpacity>
                }
                <Button onPress={onContact} title={'Continue'} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover'
    },
    footer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default ProductDetails;