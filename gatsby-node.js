const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  console.log(actions)

  const postTemplate = path.resolve('src/templates/blog-post.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              author
            }
          }
        }
      }
    }
  `).then(res =>
    res.errors
      ? Promise.reject(res.errors)
      : res.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: postTemplate,
          })
        })
  )
}
