import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero-section'
import Card from './components/Card'
export default function App(){
  return(
    <div className='w-1/3 mx-auto bg-white border-gray-200 border rounded-sm'>
    <Navbar />
    <Hero />
    <Card />
    </div>
  )
}
