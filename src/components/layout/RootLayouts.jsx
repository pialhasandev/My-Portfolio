import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import ScrollToTopBtn from './ScrollToTopBtn'

const RootLayouts = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <ScrollToTopBtn/>
    </>
  )
}

export default RootLayouts