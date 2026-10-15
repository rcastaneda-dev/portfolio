/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // The month the site was built, so the current role's dates read the same
  // on the server and in the browser.
  env: {
    BUILD_MONTH: new Date().toISOString().slice(0, 7),
  },
}

module.exports = nextConfig
