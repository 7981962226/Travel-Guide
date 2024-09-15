import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import {Places,Hotels} from '../data'
import Hotel from '../components/Hotel'
import Banner1 from '../components/Banner1'
import Banner2 from '../components/Banner2'


const MainPage = () => {
    const[places,setPlaces]=useState(Places)
    const[hotels,setHotels]=useState(Hotels)
   
    console.log(Places)
  return (
    <div>
      <Header/>
      <Banner/>
      <Banner1/>
      <Collections places={places}/>
      <Banner2/>
      <Hotel hotels={hotels}/>
      
      <Footer/>
    </div>
  )
}

export default MainPage
