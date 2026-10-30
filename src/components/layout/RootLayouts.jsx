import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTopBtn from './ScrollToTopBtn'
import WhatsAppPopup from './WhatsAppPopup'

const RootLayouts = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <WhatsAppPopup/>
    <ScrollToTopBtn/>
    </>
  )
}

export default RootLayouts