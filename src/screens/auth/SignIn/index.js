import  React, {useState} from 'react';
import { Image, SafeAreaView, Text, Touchable, TouchableOpacity, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/CheckBox';
import Button  from '../../../components/Button';
import GoogleLogin from '../../../components/GoogleLogin';

const SignIn = ({navigation}) => {
    const [checked, setChecked] = useState(false)

    return (
        <View>
            <Input label={'Email'} placeholder={'example@gmail.com'} />
            <Input isPasssword={true} label={'Password'} placeholder={'Enter your password'} />
            <Checkbox checked={checked} onCheck={() => { setChecked(!checked) }} />
            <Button title={'Sign In'} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: '25%', borderBottomWidth: 1, borderColor: 'black', height: 5, margin: 15 }}></View>
                <Text style={{ color: 'navy', fontWeight: '800', fontSize: 16 }}>Or Sign Up with</Text>
                <View style={{ width: '30%', borderBottomWidth: 1, borderColor: 'black', height: 5, margin: 15 }}></View>
            </View>
            <GoogleLogin/>
            <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>
            <Text style={{fontSize: 15, fontWeight: '400', color: 'black'}}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'navy'}}>Sign Up</Text>
            </TouchableOpacity>
            </View>
        </View>


    )
}

export default SignIn;