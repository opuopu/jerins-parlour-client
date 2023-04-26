import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function Loading() {
  return (
<div className='flex justify-center my-10'>
<Oval
    height={30}
    width={30}
    color="#F63E7B"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#F63E7B"
    strokeWidth={2}
    strokeWidthSecondary={2}
  
  />
</div>
  )
}
