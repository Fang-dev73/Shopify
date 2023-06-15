import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Checkbox = ({ checked, onCheck }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.3} onPress={onCheck}>
                {checked ?
                    <Image style={{ width: 35, height: 35, marginLeft: 20, marginVertical: 5 }} source={require('../assets/checkbox.png')} />
                    :
                    <Image style={{ width: 35, height: 35, marginLeft: 20, marginVertical: 5 }} source={require('../assets/unchecked.png')} />}
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 5, color: 'navy' }}>I agree with Terms & Privacy</Text>
        </View>
    )
}

export default  React.memo(Checkbox);