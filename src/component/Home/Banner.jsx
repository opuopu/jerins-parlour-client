import React from 'react'
import lady from '../../assets/Image_Icon/Image/young.png'
export default function Banner() {
  return (
    
    <div className="hero min-h-screen">
  <div className="hero-content flex-col gap-x-20 lg:flex-row-reverse">
    <img src={lady} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">BEAUTY SALON <br /> FOR EVERY WOMEN</h1>
      <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
      <button className="btn btn-primary bg-primary1 border-0">Get an Appointment</button>
    </div>
  </div>
</div>
  )
}
