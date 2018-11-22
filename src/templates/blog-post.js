import React from 'react'
import { graphql } from 'gatsby'
// import Helmet from 'react-helmet'

function BlogPostTemplate({ data }) {
  const { markdownRemark: blogPost } = data
  return (
    <div>
      <h1>{blogPost.frontmatter.title}</h1>
      <p>{blogPost.frontmatter.author}</p>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
      }
    }
  }
`
export default BlogPostTemplate
