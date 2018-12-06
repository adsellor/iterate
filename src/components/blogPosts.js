/* @flow */

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import BlogPostCard from './blogCard'

import '../styles/components/blog-posts.scss'

type MappedPostsProps = {
  data: Object,
}

const MappedPosts = (props: MappedPostsProps) => {
  const { edges: blogPosts } = props.data.allMarkdownRemark
  const mappedPosts = blogPosts.map(post => {
    const { frontmatter, excerpt, id } = post.node

    return (
      <BlogPostCard
        onClick={() => { }}
        key={id}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabcqwM0JRtjZFW5Kicp0LNcVHcYri6e4C9VB0Z11fbPU9S_-I"
        title={frontmatter.title}
        author={frontmatter.author}
        excerpt={excerpt}
        path={frontmatter.path}
      />
    )
  })

  return mappedPosts
}

const blogPostStyles = {}

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
                author
              }
            }
          }
        }
      }
    `}
    // TODO: limit number of rendered posts to 8 at a time
    render={data => (
      <div className="blog-posts-parent">
        <div className="blog-posts-wrapper">
          <div className="blog-posts-title">Blog Posts</div>
          <div className="blog-posts-container">
            <MappedPosts data={data} />
          </div>
        </div>
      </div>
    )}
  />
)
export default BlogPosts
export { MappedPosts }
