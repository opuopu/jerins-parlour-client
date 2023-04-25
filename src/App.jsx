import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import { router } from './router/router'
function App() {
  const queryClient = new QueryClient()

  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>

 
 <RouterProvider router={router}>

 </RouterProvider>
 </QueryClientProvider>
  )
}

export default App
