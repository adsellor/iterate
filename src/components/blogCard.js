/* @flow */

import React from 'react'
import { Link } from 'gatsby'

import '../styles/components/blog-card.scss'

type BlogPostCardProps = {
  src: string,
  title: string,
  author: string,
  excerpt: string,
  onClick: Function,
  path: string,
}

const BlogPostCard = (props: BlogPostCardProps) => (
  <div className="blog-posts-card-container">
    <Link
      to={props.path}
      onClick={props.onClick}
      className="blog-posts-card-link-wrapper"
    >
      <img
        alt="article"
        className="blog-posts-card-thumbnail"
        src={props.src}
      />
      <div className="blog-posts-card-content">
        <span className="blog-posts-card-article-title">{props.title}</span>
        <em>
          <span className="blog-posts-card-article-author">
            by {props.author}
          </span>
        </em>
        <p className="blog-posts-card-article-excerpt">{props.excerpt}</p>
      </div>
    </Link>
  </div>
)

export default BlogPostCard
