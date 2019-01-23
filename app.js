const express = require('express')
const encodeUrl = require('encodeurl')
const deeplink = require('node-deeplink')

const { router } = require('./routes/routes.js')

const app = express()
let url = ''

var middleware = (req, res, next) => {
  url = req.url
  next(url)
}

app.use(middleware)

app.get('/stupid', (req, res) => {
  res.status(200).send('stupid rooutes')
})
app.get('/*', deeplink({
  fallback: 'https://wwww.lalalab.com' + url,
  android_package_name: 'com.invaderscorp.polagram',
  ios_store_link: 'https://itunes.apple.com/us/app/lalalab-photo-printing/id586420569?mt=8' + '?url=' + encodeUrl('https://app.lalalab.com' + url)
}))

module.exports = {
  app,
}