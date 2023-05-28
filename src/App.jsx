/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header/Header'
import Product from './product/Product'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Product></Product>
     
      
    </>
  )
}

export default App
