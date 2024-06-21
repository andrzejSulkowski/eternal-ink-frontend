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
    }
};

export default nextConfig;
