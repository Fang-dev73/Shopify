import React  from 'react';
import { Image, SafeAreaView, Text, Touchable, TouchableOpacity } from 'react-native';
import Button  from '../../../components/Button';
import styles from './styles';

const Splash = ({navigation}) => {

    const handleClick = () => {
        console.log('Touchabled')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://htmlemail.io/img/blog-shopify.jpg' }} />
            <Text style={{ textAlign: 'center', fontSize: 28, color: '#008080', fontWeight: 'bold', marginTop: 10 }}>You will find all you need here.</Text>
            <Button title={'Sign Up'} onPress={() => navigation.navigate('SignUp')} />
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')} activeOpacity={0.1} style={{ margin: 5, padding: 10, width: '80%' }}>
                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: 'blue' }}>Sign In</Text>
            </TouchableOpacity>

        </SafeAreaView>


    )
}

export default Splash;