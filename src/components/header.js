import React from 'react'
import { Link } from 'gatsby'

import Button from './button'

import '../assets/header.scss'

const Header = ({ siteTitle }) => (
  <div className="header-wrapper">
    <div className="header-container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Button>Link</Button>
      <Button>Another link</Button>
    </div>
  </div>
)

export default Header
