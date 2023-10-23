import PrivateRoute from '@/helpers/components/PrivateRoute'
import React from 'react'

const Profile = () => {
  return (
    <PrivateRoute>
      <div>Profile</div>
    </PrivateRoute>
  )
}

export default Profile