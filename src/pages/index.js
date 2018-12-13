import React, { PureComponent } from 'react'

import Layout from 'components/layout'
import Header from 'components/header'
import BlogPosts from 'components/blogPosts'

import '../styles/main.scss'

const IndexPage = () => (
  <Layout>
    <Header />
    <BlogPosts />
  </Layout>
)

export default IndexPage
