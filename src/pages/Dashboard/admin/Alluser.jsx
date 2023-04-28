import { useQuery } from '@tanstack/react-query'
import React from 'react'
export default function Alluser() {
    const {data:allusers=[],refetch} = useQuery({
        queryKey:['getalluser'],
        queryFn:async()=>{
          const url =`http://localhost:3000/users`
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
          <th>email</th>
          <th>admin status</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {
          allusers?.map((user,index)=>  <tr key={index}>
            <th>{index+1}</th>
            <td>{user?.email}</td>
            <td>{user?.adminStatus?'true':'false'}</td>
            <td className=''>delete</td>
          </tr>)
        }
      
        {/* row 2 */}
    
        {/* row 3 */}
       
      </tbody>
    </table>

  </div>
  )
}
