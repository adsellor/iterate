import React from 'react'

import FirebaseProvider from './firebase'
import AuthProvider from './auth'

export default ({ element }) => (
  <FirebaseProvider>
    <AuthProvider>{element}</AuthProvider>
  </FirebaseProvider>
)
