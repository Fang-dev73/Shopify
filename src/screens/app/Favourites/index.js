import React from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native'
import { products } from '../../../data/products';
import FavouriteItem from '../../../components/FavouriteItem';
import Header from '../../../components/Header';

const Favourites = ({navigation}) => {

  const favouritesList = ({ item }) => {
    const onProductPress = () => {
      navigation.navigate("ProductDetails", {product: item})
    }
    return (
      <FavouriteItem onPress={onProductPress} {...item} />
    )
  }

  return (
    <ScrollView>
      <Header title={'Favourites'}/>
      <FlatList keyExtractor={(item) => String(item?.id)} data={products} renderItem={favouritesList} />
    </ScrollView>
  )
}

export default Favourites;
