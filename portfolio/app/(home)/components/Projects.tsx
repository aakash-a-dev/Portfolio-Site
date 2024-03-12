import React from 'react'
import { SiAuth0, SiLaravel, SiMongodb, SiNodedotjs, SiPostgresql, SiReact } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

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
          <Title text='Projects🚀' className='flex flex-col items-center justify-center -rotate-6' />
          <div className="grid grid-cols-2 sm:grid-cols-2 pt-20">
              {Project.map((project, index) => {
                  return <Link href={project.link} key={index}>
                      <div className={cn("p-5 rounded-md", project.background)}>
                          <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                              <h1>{project.title}</h1>
                          </DirectionAwareHover>
                      </div>
                  </Link>
              })}
          </div>
    </div>
  )
}
