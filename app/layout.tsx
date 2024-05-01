import Header from '@/components/layout/Header'
import '@/global.css'

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-gradient-to-t from-pink-50 to-blue-50'>
        <Header />
        {children}
      </body>
    </html>
  )
}
