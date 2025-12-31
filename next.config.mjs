/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Force Webpack usage (required because you use @svgr/webpack)
  webpack: (config) => {
    // Allow importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  // ✅ Silence Turbopack warning in Next 16
  turbopack: {},

  // ✅ Remote images config
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
