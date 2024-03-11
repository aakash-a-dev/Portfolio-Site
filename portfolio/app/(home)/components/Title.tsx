import React from 'react'

export default function Title({text, className}:{text:string, className?:string}) {
  return (
         <div className={className}>
          <h1 className='font-bold text-3xl group-hover:text-blue-500 transition-all'> {text}</h1>
                      <div className='w-40 h-2 bg-blue-500 rounded-full'></div>
                      <div className='w-40 h-2 bg-purple-500 rounded-full translate-x-2'></div>
             </div>
  )
}
