import React from 'react'
import { SiAuth0, SiLaravel, SiMongodb, SiNodedotjs, SiPostgresql, SiReact } from 'react-icons/si'
import Title from './Title'

export default function Projects() {
    const Project = [
        {
            title: "Kresoon Social",
            tech: [SiLaravel, SiPostgresql, SiAuth0],
            link: "https://krescon.social/",
            cover: "/Krescon.png",
            background: "bg-purple-500"
        },
         {
            title: "AI Automated Attendance System",
            tech: [SiNodedotjs, SiReact],
            link: "https://chimerical-taffy-43d337.netlify.app/",
            cover: "/Attendance.png",
            background: "bg-purple-500"
        },
          {
            title: "Dummy Money Transaction System",
            tech: [SiNodedotjs, SiReact, SiMongodb],
            link: "https://github.com/aakash-a-dev/money-transaction-system",
            cover: "/Money.jpeg",
            background: "bg-purple-500"
        },

    ]
  return (
      <div className='py-10 p-5 sm:p-0'>
          <Title text='Projects🚀' className='flex flex-col items-center justify-center -rotate-6'/>
    </div>
  )
}
