import PrivateRoute from '@/helpers/components/PrivateRoute'
import React from 'react'

const layout = ({ children}: {children: React.ReactNode}) => {
  return (
    <PrivateRoute>{ children}</PrivateRoute>
  )
}

export default layout