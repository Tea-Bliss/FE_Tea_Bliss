/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  sassOptions: {
    includePaths: ['styles'],
    additionalData: `@import "src/styles/globals.scss";`,
  },
  images: {
    domains: ['oboomyrmdekomaldptgh.supabase.co'],
  },
};

export default nextConfig;
