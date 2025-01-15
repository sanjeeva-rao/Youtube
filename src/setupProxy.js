const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://suggestqueries.google.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};