/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Personal_site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Personal_site/' : ''
}

export default nextConfig 