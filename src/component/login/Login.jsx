import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useauth from '../../hooks/UseAuth'

export default function Login() {
    const {LoginNow,user} = useauth()
    const location = useLocation()
  const navigate = useNavigate()
  const from  = location?.state?.from?.pathname || '/'

    const handleLogin =()=>{
        LoginNow()
        .then(result=>{
          console.log(result.user)
          if(result.user){
            navigate(from,{replace:true})
            handlePost(result.user)

          }
        })
        .catch(error=>{
          console.log(error)
        })
      }

      const handlePost =(user) =>{
        
        fetch(`http://localhost:3000/adduser`,{
            method:'POST',
            headers: {
                "Content-type": "application/json"
              },
              body:JSON.stringify({email:user?.email})
        })
        .then(res=>res.json())
        .then(data =>console.log(data))
      }
  return (
    <div className='my-40'>
     <h1 className='text-3xl text-center  font-bold mb-10 '>Login Now</h1>

<div className='text-center'>
<button onClick={handleLogin} className='bg-[#fff] border px-10 border-orange-500	 border-4 '>Sign in With <span className='text-orange-500'> Google</span></button>
</div>
<p className='text-center mt-10'><Link>Register Now</Link></p>
    </div>
  )
}
