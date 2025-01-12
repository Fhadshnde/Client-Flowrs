const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://flowrs-api-fahad.accesscam.org',
      changeOrigin: true,
    })
  );
};
