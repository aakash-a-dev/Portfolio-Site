import React, { Fragment } from 'react'
import Title from './Title'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from '@/components/ui/text-reveal-card'



export default function Timeline() {
  const events = [
    {
      company: "Boostr Technology",
      position: "Flutter Developer Intern",
      timePeriod: "Aug-2022 to Oct-2022"
    },
     {
      company: "Boostr Technology",
      position: "Flutter Developer Intern",
      timePeriod: "Aug-2022 to Oct-2022"
    },
      {
      company: "Boostr Technology",
      position: "Flutter Developer Intern",
      timePeriod: "Aug-2022 to Oct-2022"
    },

  ]
    return (
        <>
            <div className='max-w-5xl mx-auto px-8 pt-8 '>
      <Title text='My Previous Work Experience🤺' className='flex flex-col items-center justify-center -rotate-6' />
        </div>
        <div className='flex flex-col gap-y-3 w-full my-4'>
          <Circle />
          {events.map((event, key) => {
            <Fragment key={key}>
              <div className='grid gird-cols-[1fr-auto-1fr] gap-x-2 items-center mx-auto'>
                {event.direction === 'left' ?
                  (<EventCard heading={event.company} subheading={event.position} />) :
                  (
                    <div></div>
                  )
                }
              </div>
              {key < (events.length - 1 && <Circle/> )}}
            </Fragment>
          })}
          <Circle/>
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
