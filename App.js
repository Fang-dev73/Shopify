/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Splash from './src/screens/auth/Splash';
import SignUp from './src/screens/auth/SignUp';
import SignIn from './src/screens/auth/SignIn';
import Home from './src/screens/app/Home';
import Favourites from './src/screens/app/Favourites';
import Profile from './src/screens/app/Profile';
import Config from 'react-native-config';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';
import CreateListing from './src/screens/app/CreateListing';
import MyListings from './src/screens/app/MyListings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return(
  <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      <Stack.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
      <Stack.Screen options={{ headerShown: false }} name="CreateListing" component={CreateListing} />
      <Stack.Screen options={{ headerShown: false }} name="MyListings" component={MyListings} />
  </Stack.Navigator>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./src/assets/home_covered.png')
              : require('./src/assets/home.png')
          } else if (route.name === 'Favourites') {
            iconName = focused
              ? require('./src/assets/star_covered.png')
              : require('./src/assets/star.png')
          }
          else
            iconName = focused
              ? require('./src/assets/user_covered.png')
              : require('./src/assets/user.png')

          // You can return any component that you like here!
          return <Image style={{ width: 30, height: 30 }} source={iconName} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { borderTopColor: 'grey', borderTopWidth: 0.4, backgroundColor: 'white', marginVertical: 2, height: '9%' }
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Favourites" component={Favourites} options={{ headerShown: false }} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

function App({ navigation }) {
  const isSignedIn = true

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, [])

  const theme = {
    colors: {
      background: 'white'
    }
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {isSignedIn ?
          <>
            <Stack.Screen options={{ headerShown: false }} name="Tabs" component={Tabs} />
            <Stack.Screen options={{ headerShown: false }} name="ProductDetails" component={ProductDetails} />
          </>
          :
          <>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
          </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
