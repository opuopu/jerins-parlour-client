import { useQuery } from '@tanstack/react-query'
import React from 'react'

import useauth from '../../hooks/UseAuth'

export default function Dashboard() {
const {user} = useauth()
  const {data:myservice=[],refetch} = useQuery({
    queryKey:['getmyservice',user?.email],
    queryFn:async()=>{
      const url =`http://localhost:3000/getuserservice?email=${user?.email}`
      const res =  await fetch(url)
      const data = await  res.json()
      return data
    }
  })
  return (
    <div className="overflow-x-auto">
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          <th>position</th>
          <th>Name</th>
          <th>price</th>
          <th>payment</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {
          myservice?.map((service,index)=>  <tr key={index}>
            <th>{index+1}</th>
            <td>{service?.name}</td>
            <td>{service?.price}</td>
            <td className='text-red-600'>unpaid</td>
          </tr>)
        }
      
        {/* row 2 */}
    
        {/* row 3 */}
       
      </tbody>
    </table>

  </div>
  )
}
