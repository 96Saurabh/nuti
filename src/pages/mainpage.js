import React from 'react'
import MainPage from '../components/mainpage/main'
import ProductPage from '../pages/ProductPage.js'
import Footer from '../components/footer/footer.js'
import AboutUs from '../components/aboutUs/aboutUs.js'
import Banners from '../components/banners/banners.js'

function Main() {
  return (
    <div>
      <MainPage/>
      <ProductPage/>
      <Banners/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Main
