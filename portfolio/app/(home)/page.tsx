import React from 'react'
import Navbar from './components/Navbar'
import HeroComponent from './components/HeroComponent'
import { MovingBorderBtn } from '@/components/ui/MovingBorderBtn'

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
      <div className='max-w-7xl mx-auto p-5 '>
        <Navbar />
          <HeroComponent />
        </div>
        </div>
      </div>
  )
}
