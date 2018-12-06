/* @flow */

import * as React from 'react'
import { navigate } from 'gatsby'

import Modal from './modal'
import Button from './button'
import { withFirebase } from '../fire/provider'
import { withAuth } from '../store/auth'

import '../styles/components/signin-modal.scss'

// TODO: move to seperate signin wrapper

type SignInModalProps = {
  store: Object,
  onClose: Function,
  isVisible: boolean,
}

// type SignInModalState = {}

class SignInModal extends React.PureComponent<SignInModalProps, *> {
  handleGithubSignin = () => this.props.store.signInWithGithub()
  handleGoogleSignin = () =>
    this.props.store.signInWithGoogle().then(result => {
      this.props.actions.handleSignin()
      this.props.authState.authed && navigate('/home')
    })

  render() {
    console.log(this.props, this.props.authState.authed)
    return (
      <Modal onClose={this.props.onClose} isVisible={this.props.isVisible}>
        <div className="signin-modal">
          <p className="signin-text">
            Sign in, and join the community of awesomeness
          </p>
          <Button
            className="github-button"
            onClick={this.handleGithubSignin}
            backgroundColor="#333"
          >
            Sign in with Github
          </Button>
          <Button
            className="google-button"
            onClick={this.handleGoogleSignin}
            backgroundColor="#d62d20"
          >
            Sign in with Google
          </Button>
        </div>
      </Modal>
    )
  }
}

export default withAuth(withFirebase(SignInModal))
