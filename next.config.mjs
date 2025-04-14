/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'https://widget.trustpilot.com/', 'http://placehold.it/60x60'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "placehold.it",
      },
    ],
  },
};

export default nextConfig;
