/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/:id((?!api|_next|favicon.ico).*)',
                destination: '/api/:id',
            },
        ];
    },
};

module.exports = nextConfig;
