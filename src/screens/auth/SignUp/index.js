import  React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/CheckBox';
import styles from './styles';
import Button  from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';

const SignUp = ({navigation}) => {
    const [checked, setChecked] = useState(false)

    return (
        <ScrollView>
            <AuthHeader title={'Sign Up'} />
            <Input label={'Name'} placeholder={'Enter your name'} />
            <Input label={'Email'} placeholder={'example@gmail.com'} />
            <Input isPasssword={true} label={'Password'} placeholder={'Enter your password'} />
            <Checkbox checked={checked} onCheck={() => { setChecked(!checked) }} />
            <Button title={'Sign Up'} onPress={() => navigation.navigate('SignUp')} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: '25%', borderBottomWidth: 1, borderColor: 'black', height: 5, margin: 15 }}></View>
                <Text style={{ color: 'navy', fontWeight: '800', fontSize: 16 }}>Or Sign In with</Text>
                <View style={{ width: '30%', borderBottomWidth: 1, borderColor: 'black', height: 5, margin: 15 }}></View>
            </View>
            <GoogleLogin/>
            <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>
            <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'navy'}}>Sign In</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>


    )
}

export default SignUp;