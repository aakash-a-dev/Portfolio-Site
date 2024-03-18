"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiCloudflare, SiDocker, SiFigma, SiGithub, SiLaravel, SiLinux, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiShopify, SiTailwindcss, SiTypescript } from 'react-icons/si'

function Skills() {
    const skills = [
        {
            text: "ReactJS",
            Icon: SiReact,
        },
        {
            text: "NextJS",
            Icon: SiNextdotjs,
        },{
            text: "TailwindCSS",
            Icon: SiTailwindcss,
        },
         {
            text: "NodeJS",
            Icon: SiNodedotjs,
        },
        {
            text: "Docker",
            Icon: SiDocker,
        },{
            text: "MongoDB",
            Icon: SiMongodb,
        }, {
            text: "PostgreSQL",
            Icon: SiPostgresql,
        },
        {
            text: "Git & Github",
            Icon: SiGithub,
        },
        {
            text: "Prisma",
            Icon: SiPrisma,
        },
        {
            text: "Typescript",
            Icon: SiTypescript,
        },
        {
            text: "Laravel",
            Icon: SiLaravel,
        },
        {
            text: "Linux",
            Icon: SiLinux,
        },
    ]
  return (
      <div className='max-w-5xl mx-auto px-8 '>
          <Title text='Skills🦾' className='flex flex-col items-center justify-center -rotate-6'/>
          <HoverEffect items={skills} />
      </div>
  )
}

export default Skills