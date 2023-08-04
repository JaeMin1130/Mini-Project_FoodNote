const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // This is the base URL where you make API requests
    createProxyMiddleware({
      target: "http://localhost:8080", // The target server you want to forward requests to
      changeOrigin: true,
    })
  );
};
