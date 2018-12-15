import React from 'react'
import { navigate } from 'gatsby'

import { withAuth } from '../store/auth'

const PrivateRoute = ({ component: Component, location, ...props }) => {
  if (!localStorage.getItem('user') && location.pathname !== `/`) {
    navigate(`/`)
    return null
  }
  return <Component {...props} />
}

export default withAuth(PrivateRoute)
