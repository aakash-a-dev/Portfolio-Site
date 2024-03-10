import React from 'react'
import Navbar from './components/Navbar'
import HeroComponent from './components/HeroComponent'

export default function page() {
  return (
    <div className='min-h-screen bg-black'>
      <div className='max-w-7xl mx-auto p-5'>
        <Navbar />
        <HeroComponent/>
      </div>
      </div>
  )
}
