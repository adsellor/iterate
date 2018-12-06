import React from 'react'
import { Router } from '@reach/router'

import PrivateRoute from 'components/privateRoute'
import Layout from 'components/layout'
import Home from 'components/home'
import AuthProvider from '../store/auth'

const AuthedOnly = () => (
  <AuthProvider>
    <Layout>
      <Router>
        <PrivateRoute path="/home" component={Home} />
      </Router>
    </Layout>
  </AuthProvider>
)

export default AuthedOnly
