import { useState } from 'react'
import './App.css'
import Navbar from './componenst/Navbar'


function App() {
 
  return (
    <>
    <Navbar/>
    <div className='container mx-auto'>
   <div className='bg-red-600'>
    <h1>Your Todos</h1>
   </div>
   </div>
    </>
  )
}

export default App
