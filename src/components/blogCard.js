/* @flow */

import React from 'react'

import '../styles/components/blogCard.scss'

type BlogPostCardProps = {
  src: string,
  title: string,
  preview: string,
}
const BlogPostCard = (props: BlogPostCardProps) => (
  <div className="card-wrapper">
    <img alt="article" className="image" src={props.src} />
    <div className="card-content">
      <p className="article-title">{props.title}</p>
      <p className="article-preview">{props.preview}</p>
    </div>
  </div>
)

export default BlogPostCard
