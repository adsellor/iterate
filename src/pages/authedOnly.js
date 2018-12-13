import React from 'react'
import { Router } from '@reach/router'

import AuthProvider from 'src/store/auth'

import PrivateRoute from 'components/privateRoute'
import Layout from 'components/layout'
import Home from 'components/home'
import Navbar from 'components/navbar'

const AuthedOnly = () => (
  <Layout>
    <Navbar />
    <Router>
      <PrivateRoute path="/home" component={Home} />
    </Router>
  </Layout>
)

export default AuthedOnly
