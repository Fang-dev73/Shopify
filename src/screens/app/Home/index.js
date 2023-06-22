import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, FlatList, StyleSheet } from 'react-native'
import Header from '../../../components/Header'
import { categories } from '../../../data/categories'
import CategoryBox from '../../../components/CategoryBox'
import { products } from '../../../data/products'
import Products from '../../../components/Products'

const Home = ({navigation}) => {

  const [selectedCategory, setSelectedCategory] = useState()
  const [keyword, setKeyword] = useState()
  const [filteredProduct, setFilteredProduct] = useState(products)

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(product => product?.category === selectedCategory)
      setFilteredProduct(updatedProducts)
    }
    else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(product => product?.category === selectedCategory && product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
      setFilteredProduct(updatedProducts)
    }
    else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product => product?.title?.toLowerCase().includes(keyword?.toLowerCase()))
      setFilteredProduct(updatedProducts)
    }
    else {
      setFilteredProduct(products)
    }
  }, [selectedCategory, keyword])

  console.log("Keyword>>>>>>", keyword);


  const categoryList = ({ item, index }) => {
    return (
      <CategoryBox
        isSelected={item?.id === selectedCategory}
        onPress={() => setSelectedCategory(item?.id)}
        isFirst={index === 0}
        title={item?.title}
        image={selectedCategory === item?.id ? item?.image2 : { uri: item?.image }} />
    )
  }

  const productList = ({ item }) => {
    const singleProduct = (product) => {
      navigation.navigate("ProductDetails", {product: product})
    }
    return (
      <Products onPress={() => singleProduct(item)} {...item} />
    )
  }

  return (
    <ScrollView>
      <Header keyword={keyword} onSearch={setKeyword} showSearch title={'Find All you Need'} showLogout />
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
        data={filteredProduct}
        renderItem={productList}
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  categoryList: {
    paddingVertical: 10,
  },
  productList: {
    paddingHorizontal: 10
  }
})

export default Home;

