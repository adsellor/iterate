/* @flow */

import React, { PureComponent } from 'react'

// import Logo from './logo'
import Background from './headerImage'
import Button from './button'

import 'styles/components/header.scss'
import SigninModal from './signinModal'

type HeaderState = {
  isSignUpModalVisible: boolean,
}
class Header extends PureComponent<*, HeaderState> {
  state = {
    isSignUpModalVisible: false,
  }
  onClose = (): void => {
    this.setState({ isSignUpModalVisible: false })
  }

  onOpen = (): void => {
    this.setState({ isSignUpModalVisible: true })
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="header-text-container">
          {/* <Logo /> */}
          <div className="header-iterate-title">
            The only real provider of Armenia's future tech success
          </div>
          <div className="header-iterate-description">
            Iterate hackerspace is a community of Armenian programmers, tech
            professionals and beginners looking for help. We regularly hold
            workshops of different levels of experience, so those are both
            interesting for beginners and professionals.
          </div>
          <Button
            className="header-button"
            backgroundColor="#b20000"
            children="Sign Up"
            onClick={this.onOpen}
          />
          <SigninModal
            onClose={this.onClose}
            isVisible={this.state.isSignUpModalVisible}
          />
        </div>
        <Background />
      </div>
    )
  }
}

export default Header
