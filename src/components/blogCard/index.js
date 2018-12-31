import React from 'react'
import Card from 'components/card'

import 'styles/components/card.scss'

const BlogCard = props => (
  <Card {...props}>
    <div className="blog-posts-card-content">
      <span className="blog-posts-card-article-title">{props.title}</span>
      <em>
        <span className="blog-posts-card-article-author">
          by {props.author}
        </span>
      </em>
      <p className="blog-posts-card-article-excerpt">{props.excerpt}...</p>
    </div>
  </Card>
)

export default BlogCard
