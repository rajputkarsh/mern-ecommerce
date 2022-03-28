import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Slider></Slider>
      <Categories />
      {/* <Products /> */}
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home