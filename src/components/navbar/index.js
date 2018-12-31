// @flow

import React from 'react'
import { Link } from 'gatsby'

import UserBadge from 'components/userBadge'

import { withAuth } from 'src/store/auth'

import 'styles/components/navbar.scss'

const Navbar = props => {
  return (
    <div className="navbar-wrapper">
      <div>
        <Link to="/home"> Home </Link>
        <Link to="/editor"> Editor </Link>
        <Link to="/resources"> Resources </Link>
      </div>
      {props.authState.user && (
        <UserBadge avatar={props.authState.user.photoURL} />
      )}
    </div>
  )
}

export default withAuth(Navbar)
