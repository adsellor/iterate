/* @flow */

import React, { PureComponent } from 'react'

import { withFirebase } from './provider'
import FirebaseProvider from './firebase'

type AuthProviderState = {
  authed: boolean,
  displayName: string,
  email: string,
  avatar: string,
}

const AuthContext: Object = React.createContext({})

const withAuth = (Component: any) => (props: Object) => (
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
    avatar: '',
  }

  actions = {
    handleSignin: () => this.setState({ authed: true }),
    handleLogout: () => this.setState({ authed: false }),
    setDisplayName: displayName => this.setState({ displayName }),
    setAvatar: avatar => this.setState({ avatar }),
  }

  render() {
    const { state, actions } = this
    return (
      <AuthContext.Provider value={{ state, actions }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export { withAuth }
export default withFirebase(AuthProvider)
