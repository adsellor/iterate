import React from 'react'
import { graphql } from 'gatsby'

import BlogPostCard from 'components/blogCard'

const BlogPosts = () => {
  return (
    <BlogPostCard
      src="https://www.planwallpaper.com/static/images/magic-of-blue-universe-images.jpg"
      title="Hello World"
      preview="This is the article conent preview, nice huh ? "
    />
  )
}

export const postQuery = graphql`
  query BlogPostQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          rawMarkdownBody
          frontmatter {
            title
          }
        }
      }
    }
  }
`
export default BlogPosts
