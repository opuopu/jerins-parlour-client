import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Service from './Service'

export default function Services() {

  const {data:Services=[]} = useQuery({
    queryKey:['services'],
    queryFn:async()=>{
      const url = `http://localhost:3000/services`
      const res = await fetch(url)
      const data = await res.json()
      return data
    }
  }) 
  return (
    <div className='w-3/4 mx-auto'>
<h1 className='text-3xl text-center  font-bold mt-6 text-primary1'>Our Awesome Services</h1>
<div className='grid grid-cols-3 gap-12 my-10'>
{
  Services?.map(service =>(
    <Service service={service} key={service?._id}></Service>
  ))
}
</div>
    </div>
  )
}
