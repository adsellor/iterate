// @flow

import React from 'react'
import { Link } from 'gatsby'

import { withAuth } from 'src/store/auth'

import UserBadge from './userBadge'

import 'styles/components/navbar.scss'

const Navbar = props => {
  console.log(props)

  return (
    <div className="navbar-wrapper">
      <Link to="/"> Home </Link>
      {props.authState.authed && <UserBadge avatar={props.authState.avatar} />}
    </div>
  )
}

export default withAuth(Navbar)
