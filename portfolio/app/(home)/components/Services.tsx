'use client'
import React from 'react'
import Title from './Title'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import { TbSignRight } from 'react-icons/tb'

export default function Services() {
  return (
      <>
     <div className='py-16 p-5 sm:p-0'>
        <Title text='I may offer you 👨🏼‍💻' className='flex flex-col items-center justify-center -rotate-6' />
      </div>
      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-between items-center place-items-center py-4'>
      <div className='md:w-fit py-8'>
           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Landing Page Creation
        </p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 py-1 space-y-2">
                <li>➡️ One page Webpage</li>
                <li>➡️ Custom Design</li>
                <li>➡️ Social Media Integration</li>
                <li>➡️ Contact Us Section</li>
                <li>➡️ Delivery in 15 Days</li>
                <li>➡️ Clear Call to Action (CTA)</li>
         </ul>
        
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
           ₹8999
          </span>
        </button>
      </BackgroundGradient>
        </div>
        <div className='md:w-fit py-8'>
           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          LinkedIn Management
        </p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 py-1 space-y-2">
                <li>➡️ Profile Optimization</li>
                <li>➡️ Content Creation</li>
                <li>➡️ Analytics Reporting</li>
                <li>➡️ Strategy Adjustments</li>
                <li>➡️ Networking Outreach</li>
                <li>➡️ Newsletter Management</li>
         </ul>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
             ₹5999
          </span>
        </button>
      </BackgroundGradient>
        </div>
        <div className='md:w-fit py-8'>
           <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Custom Full Stack WebApp
        </p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 py-1 space-y-2">
                <li>➡️ Full-stack Web Applicatione</li>
                <li>➡️ Tailored Designn</li>
                <li>➡️ Social Media Integration</li>
                <li>➡️ Contact Functionality</li>
                <li>➡️ Delivery Will Be Decided</li>
                <li>➡️ Prominent Call-to-Action (CTA)</li>
         </ul>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            Book Appointment
          </span>
        </button>
      </BackgroundGradient>
          </div>
          </div>
      </>
  )
}
