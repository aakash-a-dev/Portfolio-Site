
import { MovingBorderBtn } from '@/components/ui/MovingBorderBtn'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

export default function HeroComponent() {
  return (
      <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
          <div className='space-y-10 text-center lg:text-left'>
              <h1 className='text-4xl lg:text-7xl font-bold'>Namaste!🙏🏽 <br />
                  <span className='underline underline-offset-8 decoration-blue-500'>{"I'm Aakash."}</span>
              </h1>
              <p className='md:w-96 text-lg text-gray-300'>
                  {
                      "Based in India, I'm a Fullstack developer passionate about building a modern web application that users love."
                  }
              </p>
              <Link href={"mailto:aakash.ar1213@gmail.com"} className='inline-block group'>
             <Title text='Contact Me📬' />
              </Link>
          </div>
          <div className="relative">
              <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                <div className='flex gap-3 translate-x-8'>
                  <div className='w-32 h-32 rounded-2xl bg-blue-500'></div>
                    <div className='w-32 h-32 rounded-full bg-purple-500'></div>
                </div>
                <div className='flex gap-3 -translate-x-8'>
                    <div className='w-32 h-32  rounded-2xl bg-purple-500'></div>
                    <div className='w-32 h-32  rounded-full bg-blue-500'></div>
                  </div>
                  <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
              </div>
              <div className="absoulte bottom-5 sm:bottom-14 left-0 sm:-left-10">
                  <MovingBorderBtn borderRadius='0.5rem' className='p-3'>
       🚀 Available to Work
                  </MovingBorderBtn>
                  </div>
          </div>
    </div>
  )
}
