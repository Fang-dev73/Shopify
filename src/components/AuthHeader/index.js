import { React } from 'react';
import { Image, Pressable, SafeAreaView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { Button } from '../../../components/Button';
import styles from './styles';

const AuthHeader = ({ title, onBackPress }) => {
    return (
        <Pressable style={styles.container} onPress={onBackPress}>
            <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png' }} />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{title}</Text>
        </Pressable>


    )
}

export default AuthHeader;