/* @flow */

import React, { PureComponent } from 'react'
import { withFirebase } from '../fire/provider'
import FirebaseProvider from './firebase'

type AuthProviderState = {
  authed: boolean,
}

const initState: AuthProviderState = {
  authed: false,
}

const AuthContext = React.createContext(initState)

const withAuth = Component => props => (
  <AuthContext.Consumer>
    {value => (
      <Component {...props} authState={value.state} actions={value.actions} />
    )}
  </AuthContext.Consumer>
)

class AuthProvider extends PureComponent<*, AuthProviderState> {
  state = {
    ...initState,
  }

  actions = {
    handleSignin: () =>
      this.setState(() => ({
        authed: true,
      })),

    handleLogut: () => this.setState(initState),
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
