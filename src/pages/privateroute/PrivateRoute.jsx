import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import useauth from '../../hooks/UseAuth'
import Loading from '../Loading'
export default function PrivateRoute({children}) {
    const {user,loading} = useauth()
    const location = useLocation()
    if(loading){
        return <Loading/>
    }
    if(user?.uid){
        return children
    }
  return (
    <Navigate to='/login' state={{from:location}} replace></Navigate>

  )
}
