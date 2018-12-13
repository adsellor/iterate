/* @flow */

import React, { PureComponent } from 'react'

import FirebaseContext from './provider'
import getFirebase from '../fire'

type ProviderState = {
  firebase: Object | null,
}
class FirebaseProvider extends PureComponent<*, ProviderState> {
  state = {
    firebase: null,
  }

  componentDidMount() {
    const app = import('firebase/app')
    const auth = import('firebase/auth')
    Promise.all([app, auth]).then(values => {
      const firebase = getFirebase(values[0])
      this.setState({ firebase })
    })
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        {this.props.children}
      </FirebaseContext.Provider>
    )
  }
}

export default FirebaseProvider
