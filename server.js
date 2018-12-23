const express = require('express')
const admin = require('firebase-admin')
const fs = require('fs')

const serviceAccount = require('./credentails.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'iterate-4741d.appspot.com',
})

const app = express()
const port = process.env.PORT || 8080

const storage = admin.storage().bucket()

fetchPosts = async () => {
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

app.get('/posts', async (req, res) => {
  console.log('start')
  await fetchPosts()
  res.sendStatus(200)
  console.log('end')
})

app.listen(port)
