/* @flow */

import React from 'react'
import { Link } from 'gatsby'

import '../styles/components/footer.scss'

const BlogPostCard = () => (
  <div className="footer-wrapper">
    <div className="footer-link-layout">
      <Link
        to="/blog-posts"
        className="footer-link"
      >
        <span>Blog Posts</span>
      </Link>
      <Link
        to="/educational-material"
        className="footer-link"
      >
        <span>Educational Material</span>
      </Link>
      <Link
        to="/terms-conditions"
        className="footer-link"
      >
        <span>Terms & Conditions</span>
      </Link>
      <Link
        to="/contacts"
        className="footer-link"
      >
        <span>Contacts</span>
      </Link>
    </div>
  </div>
)

export default BlogPostCard
