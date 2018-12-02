import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
