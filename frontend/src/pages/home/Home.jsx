import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/featured'
import PropertyList from '../../components/propertyList/propertyList'
import FeaturedProperty from '../../components/featuredProperty/featuredProperty'
import MailList from '../../components/mailList/mailList'
import Footer from '../../components/footer/footer'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Chosse your home</h1>
        <FeaturedProperty />
        <MailList />
        <Footer />


      </div>
    </div>
  )
} 
export default Home
