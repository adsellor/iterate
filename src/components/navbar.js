// @flow

import React from 'react'
import { Link } from 'gatsby'

import SignInModal from './signinModal'

const Navbar = () => (
  <div className="navbar-wrapper">
    <Link to="/about"> About </Link>
    <SignInModal anchorElement="Sign in" />
  </div>
)

export default Navbar
