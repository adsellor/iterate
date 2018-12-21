const path = require('path')
const admin = require('firebase-admin')
const fs = require('fs')

const serviceAccount = require('./credentails.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'iterate-4741d.appspot.com',
})

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

exports.onPreBootstrap = async () => {
  const storage = admin.storage().bucket()
  const files = await storage.getFiles()
  files.forEach(fileArray => {
    fileArray.forEach((file, index) => {
      // TODO: handle caching
      file.download().then(data => {
        // TODO: put posts in the folders sorted by the Date,
        // e.g 10.10.2019-authorName/index.md
        fs.writeFileSync(`${__dirname}/src/pages/post_number${index}.md`, data)
      })
    })
  })
}
