module.exports = {
  // experimental: { appDir: true }, // commented out — Next 16 warns about this key
  // ...existing config...
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};