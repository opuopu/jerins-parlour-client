import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseAdmin } from '../hooks/UseAdmin'
import useauth from '../hooks/UseAuth'
import Loading from '../pages/Loading'

export default function AdminRoute({children}) {
    const {user} = useauth()
    const [isAdmin,loading] = UseAdmin(user?.email)
    if(loading){
        return <Loading/>
    }
    if(user && isAdmin){
        return children
    }
  return (
<Navigate to='/'></Navigate>
  )
}
