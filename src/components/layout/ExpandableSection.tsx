'use client'
import React, { useState } from 'react'

const ExpandableSection = ({ children, className }:
  { children: React.ReactNode, className?: string }) => {

  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      <section className={`${isExpanded ? 'h-full' : 'max-h-screen ' + className}`
        + ' transition-all duration-700 p-5 overflow-hidden'}>
        {children}

      </section>
      <button
        onClick={() => setIsExpanded(prev => !prev)}
        className='mx-auto mt-10 block 
         rounded border-2 border-black px-5 pb-1 
         duration-300 hover:bg-black hover:text-white'
      >
        {isExpanded ? 'less' : 'more'}
      </button>
    </>
  )
}

export default ExpandableSection