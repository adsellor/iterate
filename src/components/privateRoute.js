import React from 'react'
import { navigate } from 'gatsby'

import { withAuth } from '../store/auth'

const PrivateRoute = ({ component: Component, location, ...props }) => {
  if (!props.authState.authed && location.pathname !== `/`) {
    console.log(props, 'props')
    navigate(`/`)
    return null
  }

  return <Component {...props} />
}

export default withAuth(PrivateRoute)
