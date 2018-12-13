import React from 'react'
import { Router } from '@reach/router'

import PrivateRoute from 'components/privateRoute'
import Layout from 'components/layout'
import Home from 'components/home'

const AuthedOnly = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/home" component={Home} />
    </Router>
  </Layout>
)

export default AuthedOnly