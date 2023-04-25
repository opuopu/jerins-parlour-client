import React from 'react'

export default function Service({service}) {
    const {img,title,price,desc} = service
  return (
<div className="card w-96  shadow-xl">
  <figure className="w-2/4 mx-auto">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p className='my-3'>{desc}</p>
    <div className="card-actions">
      <button className="btn btn-primary bg-primary1 border-0" >Book Now</button>
    </div>
  </div>
</div>
  )
}
