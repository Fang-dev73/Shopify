import React from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native'
import { products } from '../../../data/products';
import FavouriteItem from '../../../components/FavouriteItem';
import Header from '../../../components/Header';

const MyListings = ({ navigation }) => {

  const favouritesList = ({ item }) => {
    const onProductPress = () => {
      navigation.navigate("ProductDetails", { product: item })
    }
    return (
      <FavouriteItem icon={require('../../../assets/trash.png')} onPress={onProductPress} {...item} />
    )
  }

  return (
    <ScrollView>
      <View style={{alignSelf: 'flex-start'}}>
        <Header style={{marginRight: 90}} showBack onBackPress={() => navigation.goBack()} title={'My Listings'} />
      </View>
      <FlatList keyExtractor={(item) => String(item?.id)} data={products} renderItem={favouritesList} />
    </ScrollView>
  )
}

export default MyListings;
