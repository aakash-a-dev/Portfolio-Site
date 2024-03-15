import React from 'react'
import Title from './Title'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from '@/components/ui/text-reveal-card'

export default function Timeline() {
    return (
        <>
            <div className='max-w-5xl mx-auto px-8 pt-8 '>
      <Title text='My Previous Work Experience🤺' className='flex flex-col items-center justify-center -rotate-6' />
     </div>
            </>
  )
}

const Circle = () => {
  return (
    <>
      <div className='rounded-full w-4 h-4 bg-blue-500 mx-auto'></div>
    </>
  )
}

const Pillar = () => {
  return (
    
      <div className='rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto'></div>
    
  )
}

const EventCard = ({ heading, subheading } :{ heading: string, subheading:string}) =>{
  return (
    <div className='flex flex-col gap-y-2 border shadow-md rounded-xl p-4'>
      <div className='text-blue-500 font-bold text-lg border-b '>{heading}</div>
      <div className='text-sm text-white'>{subheading}</div>

  </div>
  )
}
