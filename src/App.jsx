import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import AuthProvider from './component/context/Authprovider'
import './index.css'
import { router } from './router/router'
function App() {
  const queryClient = new QueryClient()

  const [count, setCount] = useState(0)

  return (
   <AuthProvider>
     <QueryClientProvider client={queryClient}>

 
<RouterProvider router={router}>

</RouterProvider>
</QueryClientProvider>
   </AuthProvider>
  )
}

export default App
