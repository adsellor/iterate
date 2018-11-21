/* @flow */

import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

type LayoutProps = {
  children: React.Node,
}

const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'iterate hackerspace official website',
            },
            { name: 'keywords', content: 'iterate, hackerspace' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div
          style={{
            margin: '0 auto',
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

export default Layout
