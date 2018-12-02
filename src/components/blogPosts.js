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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabcqwM0JRtjZFW5Kicp0LNcVHcYri6e4C9VB0Z11fbPU9S_-I"
        title={frontmatter.title}
        excerpt={excerpt}
        path={frontmatter.path}
      />
    )
  })

  return mappedPosts
}

const blogPostStyles = {
  whiteSpace: 'normal',
  fontSize: '1.75rem',
  marginBottom: '1rem'
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
    render = { data => 
        <div style={{margin: '3rem'}}>
          <div style={blogPostStyles}>Blog Posts</div>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
            <MappedPosts data={data} />
          </div>
        </div>
      }
  />
)
export default BlogPosts
export { MappedPosts }
