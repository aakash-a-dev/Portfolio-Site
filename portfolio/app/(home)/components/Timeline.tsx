import React from 'react';
import Title from './Title';

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
  ];
  return (
    <>
      <div className='py-16 p-5 sm:p-0'>
        <Title text='Experience🤺' className='flex flex-col items-center justify-center -rotate-6' />
      </div>
      <div className='p-5 sm:p-0 mt-1'>
        <div className=" mx-auto relative">
          <div className="border-l-2 mt-10">
            {Jobs.map((job, index) => (
              <div key={index} className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded-md mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                <div className="flex-auto">
                  <h1 className="text-lg">{job.time }</h1>
                  <h1 className="text-xl font-bold">{job.profile}</h1>
                  <h3>{job.company}</h3>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
