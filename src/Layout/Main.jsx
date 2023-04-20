import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function Main() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
