// @flow

import React, { Suspense } from 'react'
import { Link } from 'gatsby'

import UserBadge from 'components/userBadge'

import { withAuth } from 'src/store/auth'

import 'styles/components/navbar.scss'

const Navbar = props => {
  return (
    <div className="navbar-wrapper">
      <Link to="/"> Home </Link>
      {props.authState.user && (
        <UserBadge avatar={props.authState.user.photoURL} />
      )}
    </div>
  )
}

export default withAuth(Navbar)
