import React from 'react'

import Layout from 'components/layout'
import Header from 'components/header'
import BlogPosts from 'components/blogPosts'
import Firebase from 'src/fire'

import '../styles/main.scss'

const auth = new Firebase()

const IndexPage = () => (
  <Layout>
    <Header />
    <BlogPosts />
    <div onClick={() => auth.signInWithGoogle()}>hello there</div>
  </Layout>
)

export default IndexPage
