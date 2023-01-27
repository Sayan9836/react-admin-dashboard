import React from 'react'
import About from '../components/about/About'
import Client from '../components/clients/Client'
import Detail from '../components/details/Detail'
import Features from '../components/features/Features'
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'
import Template from '../components/template/Template'
import Theme from '../components/theme/Theme'

const Home = () => {
  return (
    <>
      <Main/> 
      <Theme/> 
      <About/>
      <Template/>
      <Detail/>
      <Features/>
       <Client/>
       <Footer/>
      </>
  )
}

export default Home
