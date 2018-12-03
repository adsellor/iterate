import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import '../styles/components/header-image.scss'

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "guys.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className="header-image"
        title="background"
        alt="background"
        fadeIn
        onError={_ => new Error('Failed to load image')}
        fluid={data.file.childImageSharp.fluid}
      />
    )}
  />
)

export default Image
