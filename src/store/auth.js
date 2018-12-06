/* @flow */

import React, { PureComponent } from 'react'
import { withFirebase } from '../fire/provider'
import FirebaseProvider from './firebase'

type AuthProviderState = {
  authed: boolean,
  displayName: string,
  email: string,
}

const AuthContext = React.createContext(null)

const withAuth = Component => props => (
  <AuthContext.Consumer>
    {value => (
      <Component {...props} authState={value.state} actions={value.actions} />
    )}
  </AuthContext.Consumer>
)

class AuthProvider extends PureComponent<*, AuthProviderState> {
  state = {
    authed: false,
    displayName: '',
    email: '',
  }

  actions = {
    handleSignin: () =>
      this.setState(() => ({
        authed: true,
      })),

    handleLogut: () =>
      this.setState(state => ({
        authed: !state.authed,
      })),
  }

  render() {
    const { state, actions } = this
    return (
      <AuthContext.Provider value={{ state, actions }}>
        <FirebaseProvider>{this.props.children}</FirebaseProvider>
      </AuthContext.Provider>
    )
  }
}

export { withAuth }
export default AuthProvider
