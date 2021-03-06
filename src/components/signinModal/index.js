/* @flow */

import * as React from 'react'
import { navigate } from 'gatsby'

import Modal from 'components/modal'
import Button from 'components/button'
import { withFirebase } from 'src/store/provider'
import { withAuth } from 'src/store/auth'

import 'styles/components/signin-modal.scss'

// TODO: move to seperate signin wrapper

type SignInModalProps = {
  store: Object,
  onClose: Function,
  isVisible: boolean,
  actions: Object,
  authState: Object,
}

// type SignInModalState = {}

class SignInModal extends React.PureComponent<SignInModalProps, *> {
  handleGithubSignin = () => this.props.store.signInWithGithub()
  handleGoogleSignin = () =>
    this.props.store
      .signInWithGoogle()
      .then(result => {
        this.props.actions.setUser(result.user)
        localStorage.setItem('user', result.uuid)
        navigate('/home')
      })
      .catch(e => console.log(e))
  render() {
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

export default withFirebase(withAuth(SignInModal))
