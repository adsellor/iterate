import React from 'react'
import { graphql } from 'gatsby'
// import Helmet from 'react-helmet'
import Markdown from 'markdown-to-jsx'

import '../styles/base/blogpost-template.scss'

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark: blogPost } = data
  return (
    <>
      <div className="article-meta">
        <p>{blogPost.frontmatter.author}</p>
        <p className="title">{blogPost.frontmatter.title}</p>
      </div>
      <Markdown>{blogPost.rawMarkdownBody}</Markdown>
    </>
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
