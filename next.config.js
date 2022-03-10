module.exports = {
  // reactStrictMode: true,
  target: 'serverless',
  images: {
    loader: 'akamai',
    path: '',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack5: false,
}
