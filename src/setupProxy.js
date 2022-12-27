const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://devwinter.com/api/v1',
      changeOrigin: true
    })
  )
}