/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/physical-intelligence-clone' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/physical-intelligence-clone/' : '',
}

export default nextConfig 