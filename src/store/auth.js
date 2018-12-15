/* @flow */

import React, { PureComponent } from 'react'

import { withFirebase } from './provider'

type AuthProviderState = {
  authed: boolean,
  user: Object,
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
    user: null,
  }

  actions = {
    handleLogout: () => this.setState({ authed: false }),
    setUser: user => this.setState({ user }),
  }

  componentDidUpdate(): void {
    this.props.store.getCurrentUser(user => {
      if (user) {
        this.setState({ user })
      }
    })
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
