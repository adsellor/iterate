/* @flow */

import React from 'react'
import { Link } from 'gatsby'
// import { Img } from "gatsby-image";

import 'styles/components/card.scss'

type CardProps = {
  src: string,
  title: string,
  author: string,
  excerpt: string,
  onClick: Function,
  path: string,
  children: any,
}

const Card = (props: CardProps) => (
  <div className="blog-posts-card-container">
    <Link to={props.path} className="blog-posts-card-link-wrapper">
      {props.src && (
        <img
          alt="article"
          className="blog-posts-card-thumbnail"
          src={props.src}
        />
      )}
      {props.children}
    </Link>
  </div>
)

export default Card
