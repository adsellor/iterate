import React from 'react'
import { graphql } from 'gatsby'
// import Helmet from 'react-helmet'
import Markdown from 'markdown-to-jsx'
const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: blogPost } = data
  return (
    <div>
      <h3>title: {blogPost.frontmatter.title}</h3>
      <h4>author: {blogPost.frontmatter.author}</h4>
      <Markdown>{blogPost.rawMarkdownBody}</Markdown>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      rawMarkdownBody
      frontmatter {
        path
        title
        author
      }
    }
  }
`
export default BlogPostTemplate
