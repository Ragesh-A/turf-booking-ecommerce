'use client'

import BoxWrap from '@/components/layout/BoxWrap'
import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/navigation'

const Page = () => {
  const navigate = useRouter()
  const handleSubmit = () => {
    
   }
  return (
    <div>
      <BoxWrap className='max-w-[]'>
        <BoxWrap className='flex gap-2'>
          <label htmlFor="email">Email</label>
          <input id='email' className='w-full outline-none' type="email" />
        </BoxWrap>
        <BoxWrap>
          <div className='flex gap-2'>
            <label htmlFor="password">Password</label>
            <input id='password' className='flex-1 outline-none' type='password' />
          </div>
        </BoxWrap>
        <button
          type='button'
          onClick={handleSubmit}
          className='w-full  rounded-md bg-slate-800 py-2 text-white'>
          submit
        </button>
      </BoxWrap>
      <div className="mt-5 flex w-full justify-between px-3 capitalize">
      <Link href='login'>login</Link>
      </div>
    </div>
  )
}

export default Page