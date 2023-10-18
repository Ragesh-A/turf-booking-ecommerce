'use client'
import BoxWrap from '@/components/layout/BoxWrap'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {

  const [isPassword, setIsPassword] = useState(true)
  const handleSubmit = () => { }
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
            <input id='password' className='flex-1 outline-none' type={isPassword ? 'password' : 'text'} />
            <button onClick={() => setIsPassword(prev => !prev)}>{isPassword ? 'show' : 'hide'}</button>
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
        <Link href='signup'>create account</Link>
        <Link href='reset'>forgot password</Link>
      </div>
    </div>
  )
}


export default Page