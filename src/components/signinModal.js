/* @flow */

import * as React from 'react'

import Modal from './modal'

type SignInModalProps = {
  children: React.Node,
}

type SignInModalState = {
  isVisible: boolean,
}

class SignInModal extends React.PureComponent<
  SignInModalProps,
  SignInModalState
> {
  state = {
    isVisible: false,
  }

  onClose = (): void => {
    this.setState({ isVisible: false })
  }

  onOpen = (): void => {
    this.setState({ isVisible: true })
  }
  render() {
    return (
      <>
        <a onClick={this.onOpen}> Open Me </a>
        <Modal onClose={this.onClose} isVisible={this.state.isVisible}>
          Hello
        </Modal>
      </>
    )
  }
}

export default SignInModal
