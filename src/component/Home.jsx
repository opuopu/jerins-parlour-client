import React from 'react'
import Banner from './Home/Banner'
import Profession from './profession/Profession'
import Services from './services/Services'

export default function Home() {
  return (
    <div>
      <Banner/>
      <Services/>
      <Profession/>
    </div>
  )
}
