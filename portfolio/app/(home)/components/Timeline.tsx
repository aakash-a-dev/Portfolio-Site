import React from 'react'
import Title from './Title'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from '@/components/ui/text-reveal-card'

export default function Timeline() {
    return (
        <>
            <div className='max-w-5xl mx-auto px-8 pt-8 '>
      <Title text='My Previous Work Experience🤺' className='flex flex-col items-center justify-center -rotate-6' />
        <div className="pt-8 flex justify-center items-center">
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry"
      >
        <TextRevealCardTitle>
          Why me?
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Just because...
        </TextRevealCardDescription>
      </TextRevealCard>
                </div>
                </div>
            </>
  )
}
