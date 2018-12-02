/* @flow */

import React from 'react'
import { Link } from 'gatsby'

import '../styles/components/blogCard.scss'

const cardStyles = {
  display: 'inline-block',
  width: '12.5rem',
  height: '15rem',
  marginRight: '1rem',
  marginBottom: '1.75rem'
}

type BlogPostCardProps = {
  src: string,
  title: string,
  excerpt: string,
  onClick: Function,
  path: string,
}
const BlogPostCard = (props: BlogPostCardProps) => (
  <div style={cardStyles}>
    <Link to={props.path} onClick={props.onClick} className="card-wrapper">
      <img alt="article" className="image" src={props.src} />
      <div className="card-content">
        <p className="article-title">{props.title}</p>
        <p className="article-excerpt">{props.excerpt}</p>
      </div>
    </Link>
  </div>
)

export default BlogPostCard
