import React from 'react'

import Image from './image'
// import Button from './button'

import 'styles/components/header.scss'

const Header = ({ siteTitle }) => (
  <div className="header-wrapper">
    <div className="header-container">
      <Image />
    </div>
  </div>
)

export default Header
