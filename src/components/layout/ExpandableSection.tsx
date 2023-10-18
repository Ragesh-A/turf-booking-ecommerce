'use client'
import React, { useState } from 'react'

const ExpandableSection = ({ children, className }:
  { children: React.ReactNode, className?: string }) => {
 
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className={`${isExpanded ? 'h-full' : 'h-screen ' + className}`
      + ' transition-all duration-700 p-5'}>
      {children}
      <button
        onClick={() => setIsExpanded(prev => !prev)}
        className='mx-auto mt-10 block -translate-x-1/2 rounded border-2 border-black px-5 pb-1 duration-300 hover:bg-black hover:text-white'
      >{ isExpanded ? 'more' : 'less'}</button>
    </section>
  )
}

export default ExpandableSection