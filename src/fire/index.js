/* @flow */
import { initializeApp, auth } from 'firebase'

import config from 'gatsby-plugin-config'

// You will need to have a .env file in the
// root of your project with the GATSBY_API_KEY in it.
// ::: No need to pass API_KEY env variable every time
// everything is handled with dotenv and gatsby-plugin-config
// to access from the client side add GATSBY_ prefix to variable
// https://www.gatsbyjs.org/packages/gatsby-plugin-config/?=dotenv

const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: 'iterate-4741d.firebaseapp.com',
  databaseURL: 'https://iterate-4741d.firebaseio.com',
  projectId: 'iterate-4741d',
  storageBucket: 'iterate-4741d.appspot.com',
  messagingSenderId: '785874649615',
}

// refactor with simple seperate functions

class Firebase {
  constructor() {
    initializeApp(firebaseConfig)
    this.googleProvider = new auth.GoogleAuthProvider()
    this.githubProvider = new auth.GithubAuthProvider()
  }
  signInWithGoogle() {
    auth().signInWithPopup(this.googleProvider)
  }
  signInWithGithub() {
    auth().signInWithPopup(this.githubProvider)
  }
}

export default Firebase
