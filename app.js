const express = require('express')
const encodeUrl = require('encodeurl')
const deeplink = require('node-deeplink')

const { router } = require('./routes/routes.js')

const app = express()
let path = ''
let account = ''

app.use('/', (req, res, next) => {
  const tmp = req.url
  path = tmp.split('?')[0]
  account = tmp.split('?')[1]
  next()
})

app.get('/stupid', (req, res) => {
  res.status(200).send(`value of account from stupid ${account}`)
})

app.get('/deeplink', deeplink({
  fallback: 'https://www.lalalab.com/fr'
//   android_package_name: 'com.invaderscorp.polagram',
//   ios_store_link: 'https://itunes.apple.com/us/app/lalalab-photo-printing/id586420569?mt=8' + '?url=' + encodeUrl('https://app.lalalab.com' + url)
}))

// app.get('*', deeplink({
//   fallback: 'https://wwww.lalalab.com' + url,
//   android_package_name: 'com.invaderscorp.polagram',
//   ios_store_link: 'https://itunes.apple.com/us/app/lalalab-photo-printing/id586420569?mt=8' + '?url=' + encodeUrl('https://app.lalalab.com' + url)
// }))

module.exports = {
  app,
}