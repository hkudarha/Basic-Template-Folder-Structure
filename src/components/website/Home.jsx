import React from 'react'
import Top from './Home/Top'
import ProductList from './product/ProductList'
import CategoryList from './category/CategoryList'
import WhyChooseUs from './Home/WhyChooseUs'

const Home = () => {
  return (
    <>
      <Top />
      <CategoryList />
      <WhyChooseUs />
      <ProductList/>
    </>
  )
}

export default Home
