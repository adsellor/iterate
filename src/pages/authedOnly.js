import React from 'react'
import { Router } from '@reach/router'

import AuthProvider from 'src/store/auth'

import PrivateRoute from 'components/privateRoute'
import Layout from 'components/layout'
import Home from 'components/home'
import Editor from 'components/editor'

const AuthedOnly = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/editor" component={Editor} />
    </Router>
  </Layout>
)

export default AuthedOnly
