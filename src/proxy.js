const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const proxyTarget =
  process.env.PROXY_TARGET || '<put the url of the python server here>';

app.use(
  '/api',
  createProxyMiddleware({
    target: `https://${proxyTarget}`,
    changeOrigin: true,
    headers: { origin: proxyTarget },
    logLevel: 'debug',
  }),
);

// Change this to whatever port it is you running it on
app.listen(9090);
