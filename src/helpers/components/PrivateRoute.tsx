'use client'
import Loading from '@/components/Loading'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useRouter()

  useEffect(() => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        setIsLoading(false)
      } else {
        navigate.replace('/auth/login')
      }
    } catch (error) {
      navigate.push('/auth/login')
    }
  }, [navigate])

  if (isLoading) return <Loading />

  return children
}
export default PrivateRoute