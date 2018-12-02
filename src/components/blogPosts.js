/* @flow */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import BlogPostCard from './blogCard'

type MappedPostsProps = {
  data: Object,
}

const MappedPosts = (props: MappedPostsProps) => {
  const { edges: blogPosts } = props.data.allMarkdownRemark
  const mappedPosts = blogPosts.map(post => {
    const { frontmatter, excerpt, id } = post.node

    return (
      <BlogPostCard
        onClick={() => {}}
        key={id}
        src="https://www.planwallpaper.com/static/images/magic-of-blue-universe-images.jpg"
        title={frontmatter.title}
        excerpt={excerpt}
        path={frontmatter.path}
      />
    )
  })
  return mappedPosts
}

const BlogPosts = () => (
  <StaticQuery
    query={graphql`
      query BlogPostQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              excerpt(pruneLength: 200)
              frontmatter {
                title
                path
              }
            }
          }
        }
      }
    `}
    render={data => <MappedPosts data={data} />}
  />
)
export default BlogPosts
export { MappedPosts }
