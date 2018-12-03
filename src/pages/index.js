import React, { PureComponent } from 'react'

import Layout from 'components/layout'
import Header from 'components/header'
import BlogPosts from 'components/blogPosts'
import FirebaseContext from '../fire/provider'
import getFirebase from '../fire'

import '../styles/main.scss'

class IndexPage extends PureComponent {
  state = {
    firebase: null,
  }

  componentDidMount() {
    const app = React.lazy(() => import('firebase/app'))
    const auth = React.lazy(() => import('firebase/auth'))

    Promise.all([app, auth]).then(values => {
      const firebase = getFirebase(values[0])
      this.setState({ firebase })
      console.log(this.state.firebase)
    })
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <Layout>
          <Header />
          <BlogPosts />
        </Layout>
      </FirebaseContext.Provider>
    )
  }
}

export default IndexPage
