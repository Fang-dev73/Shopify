import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';


const Profile = ({navigation}) => {
  const num = 10
  const onLogout = () => {
    console.log("Log Out Clicked");
  }

  const onSettingPress = () => {
    navigation.navigate('Settings');
  }

  return (
    <View style={{flex: 1}}>
      <Header title={'Profile'} showLogout onLogout={onLogout} />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.email}>User Email</Text>
          <ListItem onPress={() => navigation.navigate('MyListings')} title={'My Listings'} subtitle={`You have ${num} listings`} />
          <ListItem onPress={onSettingPress} title={'Settings'} subtitle={`You have ${num} listings`} />
        </View>
        <Button onPress= {() => navigation.navigate('CreateListing')} title={'Add New Listing'}/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    padding: 24,
    flex: 1
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12
  },
  email: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 16
  },
  content: {
    flex: 1,
  }
})

export default Profile;
