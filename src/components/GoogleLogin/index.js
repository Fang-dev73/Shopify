import React from "react"
import { Image, Pressable, Text, TouchableOpacity } from "react-native"
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const GoogleLogin = () => {

    const handleGoogleLogin = async () => {
            try {
              await GoogleSignin.hasPlayServices();
              const userInfo = await GoogleSignin.signIn();
              console.log("User Info: ",userInfo)
              setState({ userInfo });
            } catch (error) {
              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
              } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
              } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
              } else {
                // some other error happened
              }
            }
    }

    return (
        <TouchableOpacity onPress={handleGoogleLogin} style={{alignSelf: 'center', margin: 15, backgroundColor: 'white',padding: 10, width: '25%', borderRadius: 20, borderWidth: 3, borderColor: 'black'}}>
            <Image style={{width: '60%', height: 40, resizeMode: 'contain', alignSelf: 'center'}} source={require('../../assets/search.png')}/>
        </TouchableOpacity>
    )
}

export default React.memo(GoogleLogin);