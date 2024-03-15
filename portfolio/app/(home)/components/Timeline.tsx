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
