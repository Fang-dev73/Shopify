import React, { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

const Input = ({ label, placeholder, isPasssword }) => {
    const [isPassswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <View style={{ padding: 15 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'navy' }}>{label}</Text>
            <View style={{ width: '100%', height: 50, borderColor: 'black', borderWidth: 1, marginTop: 15, borderRadius: 10 }}>
                <TextInput secureTextEntry={isPasssword && !isPassswordVisible} placeholder={placeholder} />
                {isPasssword &&
                    <Pressable onPress={() => { setIsPasswordVisible(!isPassswordVisible) }}>
                    {isPassswordVisible === false ? 
                        <Image style={{ width: '15%', height: 30, resizeMode: 'contain', alignSelf: 'flex-end', marginTop: -40, marginRight: 5, alignItems: 'center' }} source={{ uri: 'https://static.thenounproject.com/png/906432-200.png' }} />
                        :
                        <Image style={{ width: '20%', height: 40, resizeMode: 'contain', alignSelf: 'flex-end', marginTop: -40, alignItems: 'center' }} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/086/018/original/preview-show-interface-icon-free-vector.jpg' }} />
                    }   
                    </Pressable>
                }

            </View>
        </View>
    )
}

export default Input;