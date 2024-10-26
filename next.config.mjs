import NextBundleAnalyzer from '@next/bundle-analyzer';
/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    // assetPrefix: './',
    // reactStrictMode: false,
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true
            }
        ]
    },
    experimental: {
        optimizePackageImports: ["crypto-browserify"]
    },
    output: "standalone",
    productionBrowserSourceMaps: process.env.NODE_ENV === 'development',
};

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
