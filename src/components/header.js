import React from 'react'

// import Logo from './logo'
import Background from './background'
// import Button from './button'

import 'styles/components/header.scss'

const Header = ({ siteTitle }) => (
  <div className="header-wrapper">
    <div className="header-text-container">
      {/* <Logo /> */}
      <div className="header-iterate-title">
        The only real provider of Armenia's future tech success
      </div>
      <div className="header-iterate-description">
        Iterate hackerspace is a community of Armenian programmers, tech professionals and beginners looking for help.
        We regularly hold workshops of different levels of experience, so those are both interesting for beginners and professionals. 
      </div>
    </div>
    <Background />
  </div>
)

export default Header
