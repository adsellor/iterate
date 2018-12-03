/* @flow */

import * as React from 'react'

import Modal from './modal'
import Button from './button'
import { withFirebase } from '../fire/provider'

import '../styles/components/signin-modal.scss'

// move to seperate signin wrapper

type SignInModalProps = {
  anchorElement: any,
  firebase: Object,
}

type SignInModalState = {
  isVisible: boolean,
}

class SignInModal extends React.PureComponent<
  SignInModalProps,
  SignInModalState
> {
  constructor() {
    super()
    this.state = {
      isVisible: false,
    }
  }

  onClose = (): void => {
    this.setState({ isVisible: false })
  }

  onOpen = (): void => {
    this.setState({ isVisible: true })
  }

  handleGithubSignin = () => this.props.firebase.signInWithGithub()
  handleGoogleSignin = () => this.props.firebase.signInWithGoogle()

  render() {
    return (
      <>
        <a onClick={this.onOpen}>{this.props.anchorElement}</a>
        <Modal onClose={this.onClose} isVisible={this.state.isVisible}>
          <div className="signin-modal">
            <p className="signin-text">
              Sign in, and join the community of awesomeness
            </p>
            <Button onClick={this.handleGithubSignin} backgroundColor="#333">
              Sign in with Github
            </Button>
            <Button onClick={this.handleGoogleSignin} backgroundColor="#d62d20">
              Sign in with Google
            </Button>
          </div>
        </Modal>
      </>
    )
  }
}

export default withFirebase(SignInModal)
