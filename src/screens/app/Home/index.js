import React, { useState } from 'react'
import { ScrollView, View, Text, FlatList, StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import { categories } from '../../../data/categories'
import CategoryBox from '../../../components/CategoryBox'
import { products } from '../../../data/products'
import Products from '../../../components/Products'

const Home = () => {

  const [selectedCategory, setSelectedCategory] = useState(false)

  const categoryList = ({ item, index }) => {
    console.log("Item>>>>>>>>>>", item)
    return (
      <CategoryBox isSelected = {item?.id === selectedCategory}  onPress={() => setSelectedCategory(item?.id)} isFirst={index === 0} title={item?.title} image={selectedCategory === item?.id ? item?.image2 : {uri: item?.image}}/>
    )
  }

  const productList = ({item}) => {
    return  (
      <Products {...item}/>
    )
  }

  return (
    <ScrollView>
      <Header showSearch title={'Find All you Need'} showLogout />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.categoryList}
        data={categories}
        renderItem={categoryList}
        keyExtractor={(item, index) => String(index)} 
      />
      <FlatList 
        style={styles.productList}
        numColumns={2}
        data={products}
        renderItem={productList}
        ListFooterComponent = {<View style={{ height: 20}}/>}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  categoryList: {
    paddingVertical: 24,
  }, 
  productList: {
    paddingHorizontal: 10
  }
})

export default Home;

