const withPWA = require("next-pwa");

module.exports = withPWA({
  swcMinify: true,
  experimenatal: {
    styledComponents: true,
  },
  nextConfig: {
    reactStrictMode: true,
  },
  pwa: {
    dest: "public",
  },
});
