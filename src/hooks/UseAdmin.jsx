import { useEffect, useState } from "react"



export const UseAdmin = (email) =>{
    const [isAdmin,cheekadmin] = useState({})
    const [loading,setloading]  = useState(true)
    useEffect(()=>{
        fetch(`http://localhost:3000/admin?email=${email}`) 
        .then(res=>res.json())
        .then(data=>{cheekadmin(data.isAdmin)
                    setloading(false)
        
        
        })
      },[email])

      return [isAdmin,loading]
}