import React from 'react'
import mackup from '../../assets/Image_Icon/Image/mackup.png'
export default function Profession() {
  return (
    <div className="hero min-h-screen bg-[#E5E5E5]">
    <div className="hero-content flex-col lg:flex-row gap-12">
      <img src={mackup} className=" max-w-lg rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Let us handle your screen <span className='text-primary1'>Professionally.</span></h1>
        <p className="py-6">With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general ipsum.Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum..</p>
        <button className="btn btn-primary bg-primary1 border-0">Get Started</button>
      </div>
    </div>
  </div>
  )
}
