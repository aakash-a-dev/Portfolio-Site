import React from 'react'
import Navbar from './components/Navbar'
import HeroComponent from './components/HeroComponent'
import { MovingBorderBtn } from '@/components/ui/MovingBorderBtn'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Services from './components/Services'

export default function page() {
  return (
    <div className='min-h-full bg-black overflow-hidden'>
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
        <Projects />
        <div className='max-w-7xl mx-auto sm:p-0 lg:p-5'>
          <Timeline />
          <Services/>
          </div>
        <Footer />
      </div>
      </div>
  )
}
