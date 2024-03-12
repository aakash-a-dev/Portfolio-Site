import React from 'react'
import { SiAuth0, SiLaravel, SiMongodb, SiNodedotjs, SiPostgresql, SiReact } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {
    const Project = [
        {
            title: "Krescon Social",
            tech: [SiLaravel, SiPostgresql, SiReact],
            link: "https://krescon.social/",
            cover: "/Krescon.png",
            background: "bg-blue-500"
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
            background: "bg-green-500"
        },

    ]
  return (
      <div className='py-10 p-5 sm:p-0'>
          <Title text='Projects🚀' className='flex flex-col items-center justify-center -rotate-6' />
          <div className="grid grid-cols-2 sm:grid-cols-2 pt-20 gap-5">
              {Project.map((project, index) => {
                  const Icon = project.tech;
                  return <Link href={project.link} key={index}>
                      <div className={cn("p-5 rounded-md", project.background)}>
                          <DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
                              <div className='space-y-5'>
                              <h1 className='text-2xl font-bold'>{project.title}</h1>
                              <div className='flex items-center gap-5'>
                                  {project.tech.map((Icon, index) => {
                                      return <Icon className='w-8 h-8' key={index} />
                                  })}
                                  </div>
                                  </div>
                          </DirectionAwareHover>
                      </div>
                  </Link>
              })}
          </div>
    </div>
  )
}
