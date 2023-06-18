import React from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native'
import { products } from '../../../data/products';
import FavouriteItem from '../../../components/FavouriteItem';
import Header from '../../../components/Header';

const Favourites = () => {

  const favouritesList = ({ item }) => {
    return (
      <FavouriteItem {...item} />
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
