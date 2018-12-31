const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve('src/templates/blogPostTemplate.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            rawMarkdownBody
            id
            frontmatter {
              path
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

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
            use: ['null-loader'],
          },
        ],
      },
    })
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // match pages only on client
  if (page.path.match(/^\/authedOnly/)) {
    page.matchPath = '/*'
    createPage(page)
  }
}
