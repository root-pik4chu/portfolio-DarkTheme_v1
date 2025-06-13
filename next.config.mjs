/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com', // This is the primary domain for Unsplash images
          port: '',
          pathname: '/**', // Allow any path from this hostname
        },
        // If you're using the source.unsplash.com short URL, you might also need this:
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
};

export default nextConfig;
