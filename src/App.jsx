import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero-section'
import Card from './components/Card'
import data from './data'
export default function App(){
  // console.log(data)
  const cards=data.map(item=>{
    return <Card 
    {...item}
    />
  })
  return(
    <div className='w-1/3 mx-auto bg-white border-gray-200 border rounded-sm'>
    <Navbar />
    <Hero />
    <div className=' card-container flex overflow-x-auto gap-4 pb-4 px-10'>
    {cards}
    </div>
    </div>
  )
}
