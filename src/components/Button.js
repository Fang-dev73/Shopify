import React from "react"
import { Pressable, Text, TouchableOpacity } from "react-native"


const Button = ({title, onPress}) => {

    return (
        <Pressable onPress={onPress} style={{alignSelf: 'center', margin: 15, backgroundColor: 'blue',padding: 10, width: '80%', borderRadius: 20, borderWidth: 3, borderColor: 'black'}}>
            <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'white'}}>{title}</Text>
        </Pressable>
    )
}

export default React.memo(Button);