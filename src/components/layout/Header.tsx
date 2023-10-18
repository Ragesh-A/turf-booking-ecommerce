import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='absolute z-50 flex w-full justify-between px-5 py-10 md:justify-normal md:gap-2'>
      <Image
        src='/img/logo.svg'
        width={25}
        height={25}
        alt='logo' />
      <div className='flex md:gap-20'>
        <NavLink href='/' >Home</NavLink>
        <NavLink href='/kook' >Book</NavLink>
        <NavLink href='/shop' >Merchantries</NavLink>
      </div>
    </header>
  )
}

const NavLink = ({ href, children }: { href: URL | string, children: React.ReactNode | string }) => {
  return <Link
    className='border-2 border-transparent px-2 py-1 text-white hover:border-b-white'
    href={href}>{children}</Link>
}

export default Header