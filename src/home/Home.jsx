import React, { useEffect } from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUS from './AboutUS'
import AppSection from './AppSection'
import Sponser from './Sponser'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
  });
};

const Home = () => {

    useEffect(()=>{
      scrollToTop();
    },[]);
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <LocationSprade/>
      <AboutUS/>
      <AppSection/>
      <Sponser/>
    </div>
      
  )
}

export default Home

