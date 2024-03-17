import React from 'react'
import Title from './Title'

export default function Timeline() {
  const Jobs = [
    {
      company: "Boostr Technology",
      profile: "Figma Developer Intern",
      time: "Aug 2021 - Oct 2021"
    },
    {
      company: "Run Media LLP",
      profile: "Web Developer Intern",
      time: "Dec 2021 - Mar 2022"
    },
     {
      company: "Waywen",
      profile: "Software Developer Intern",
      time: "Aug 2023 - December 2023"
    },
  ]
  return (
    <>
      <div className='py-16 p-5 sm:p-0'>
        <Title text='My Experience🤺  ' className='flex flex-col items-center justify-center -rotate-6' />
        </div>
    <div className='py-16 p-5 sm:p-0 mt-5'>

         <ol  className="relative border-s border-gray-200 dark:border-gray-700">                  
        {Jobs.map((job, key) => (
          <li key={key} className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
             <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{ job.time}</time>
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{job.company}</h3>
             <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{ job.profile}</p>
          </li>
        
        )
          )}
          </ol>
</div>    

    </>
  )
}
