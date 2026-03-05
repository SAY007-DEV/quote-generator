/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/:id',
                destination: '/api/:id',
            },
        ];
    },
};

module.exports = nextConfig;
