'use client'
import React, { useEffect, useState } from 'react'

const ChangingTitle = ({ titles}: { titles: string[]}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setIndex( prev =>
        prev >= titles.length -1 ? 0 : ++prev
      );
      
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [titles])
  return titles[index]
}

export default ChangingTitle