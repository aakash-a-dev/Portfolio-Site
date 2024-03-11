import React from 'react'
import Navbar from './components/Navbar'
import HeroComponent from './components/HeroComponent'
import { MovingBorderBtn } from '@/components/ui/MovingBorderBtn'
import Skills from './components/Skills'

export default function page() {
  return (
    <div className='min-h-[400vh] bg-black overflow-hidden'>
    <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
      <div className='max-w-7xl mx-auto p-5 '>
        <Navbar />
          <HeroComponent />
      </div>
        <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0'>
        </div>
        </div>
        
    <div className='max-w-7xl mx-auto p-5 mt-20'>
      <Skills />
    </div>
      </div>
  )
}
