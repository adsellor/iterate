import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const logoStyles = {
  height: 'auto'
}

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        title="logo"
        alt="logo"
        fadeIn
        onError={_ => new Error('Failed to load image')}
        fluid={data.file.childImageSharp.fluid}
        styles={logoStyles}
      />
    )}
  />
)
export default Image
