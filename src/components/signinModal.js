/* @flow */

import * as React from 'react'

import Modal from './modal'
import Button from './button'
import { withFirebase } from '../fire/provider'

import '../styles/components/signin-modal.scss'

// move to seperate signin wrapper

type SignInModalProps = {
  firebase: Object,
  onClose: Function,
  isVisible: boolean,
}

// type SignInModalState = {}

class SignInModal extends React.PureComponent<SignInModalProps, *> {
  handleGithubSignin = () => this.props.firebase.signInWithGithub()
  handleGoogleSignin = () =>
    this.props.firebase.signInWithGoogle().then(result => {
      console.log(result)
    })

  render() {
    return (
      <Modal onClose={this.props.onClose} isVisible={this.props.isVisible}>
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
    )
  }
}

export default withFirebase(SignInModal)
