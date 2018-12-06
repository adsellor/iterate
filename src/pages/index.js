import React, { PureComponent } from 'react'

import Layout from 'components/layout'
import Header from 'components/header'
import BlogPosts from 'components/blogPosts'
import AuthProvider from '../store/auth'
import '../styles/main.scss'

const IndexPage = () => (
  <AuthProvider>
    <Layout>
      <Header />
      <BlogPosts />
    </Layout>
  </AuthProvider>
)

export default IndexPage
