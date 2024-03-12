import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar({className}:{className?:string}) {
    const Socials = [
        {
            link: "https://www.linkedin.com/in/aakash-a-rajput/",
            label: "LinkedIn",
            Icon: SiLinkedin
        },
        {
            link: "https://github.com/aakash-a-dev",
            label: "GitHub",
            Icon: SiGithub
        },
          {
            link: "https://twitter.com/aakashadev",
            label: "X",
            Icon: SiX
        },
        
    ]
  return (
      
          <nav className={cn('py-10 flex justify-between items-center', className)}>
              <h1 className='text-2xl font-bold underline underline-offset-8 decoration-blue-500 -rotate-2'>AAR 🧑🏽‍💻</h1>
          
          <div className='flex items-center gap-5'>
              {Socials.map((social, index) => {
                  const Icon = social.Icon
                  return <Link href={social.link} key={index} aria-label={social.label}>
                      <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                  </Link>
              })}
          </div>
          </nav>
  )
}
