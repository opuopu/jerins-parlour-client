import React from 'react'
import useauth from '../../hooks/UseAuth'
export default function Modal({service,setsingleservice}) {

  const {price,title} = service
  const {user} = useauth()
  const postService =(e) =>{
    e.preventDefault()
    const number = e.target.number.value 
    const service ={
      number,
      email:user?.email,
      name:title,
      price
    }
    fetch(`http://localhost:3000/postservice`,{
      method:'POST',
      headers: {
          "Content-type": "application/json"
        },
        body:JSON.stringify(service)
  })
  .then(res=>res.json())
  .then(data =>{
    if(data.acknowledged){
      setsingleservice(null)
    }
  
  })
}

  return (
  <div>
    {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="book-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative bg-white">
    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <form action="" className='mt-6' onSubmit={postService}>
  <input name='title' type="text" placeholder="title" className="input input-bordered border-2 w-full mt-4 bg-[#fff]"  defaultValue={title} readOnly/>
  <input name='fullName' defaultValue={user?.email} readOnly type="text" placeholder="full name" className="input input-bordered border-2 w-full mt-4 bg-[#fff]" />
  <input name='number' type="number" placeholder="phone number" className="input input-bordered border-2 w-full mt-4 bg-[#fff]" />
  <input name='price' type="number" placeholder="price" defaultValue={price} readOnly className="input input-bordered border-2 w-full mt-4 bg-[#fff]" />
 <div className='flex justify-center'>
 <input type="submit" className='btn btn-primary bg-primary1 w-full border-0 mt-10' value="order service" />
 </div>
  </form>

  </div>
</div>
  </div>
  )
}
