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

  async componentDidMount() {
    const app = import('firebase/app')
    const auth = import('firebase/auth')
    const db = import('firebase/database')
    const storage = import('firebase/storage')

    Promise.all([app, auth, db, storage]).then(values => {
      const firebase = getFirebase(values[0])
      this.setState({ firebase })
    })

    await fetch('http://localhost:8080/posts')
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
