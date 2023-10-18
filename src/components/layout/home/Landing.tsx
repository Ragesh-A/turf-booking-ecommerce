import React from 'react'
import ChangingTitle from '../ChangingTitle'
import Link from 'next/link'

const Landing = () => {
  return (
    <section
      className="relative flex min-h-screen flex-col 
        justify-center px-5 xl:h-screen"
      style={{
        background: 'linear-gradient(90deg, black , transparent), url(/img/soccer.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>

      <h1 className="left-5 text-[5rem] font-bold uppercase leading-[4rem] md:absolute md:-rotate-90 xl:-left-10 xl:text-9xl">
        <span className="text-white">
          <ChangingTitle titles={['Soccer', 'Cricket']} />
        </span> <br />
        <span className="white-outline ms-auto block ">Team</span>
      </h1>
      <p className="mt-5 text-white md:text-center">Book your turf easy</p>
      <div className="mt-10 flex gap-2 md:absolute md:bottom-10 md:left-1/2 
        md:-translate-x-1/2">
        <Link href='turfs'
          className="rounded-md border-2 border-white 
          px-4 py-2 text-xl font-bold text-white hover:bg-white hover:text-black"
        >Book now</Link>
        <Link href='merchantries'
          className="rounded-md border-2 bg-white px-4  py-2 text-xl font-bold hover:bg-transparent hover:text-white"
        >
          Shop Merchantries
        </Link>
      </div>
    </section>
  )
}

export default Landing