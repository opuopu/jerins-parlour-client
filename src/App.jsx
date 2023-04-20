import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css'
import { router } from './router/router'

function App() {
  const [count, setCount] = useState(0)

  return (
 <RouterProvider router={router}>

 </RouterProvider>
  )
}

export default App
