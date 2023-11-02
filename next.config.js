/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites() {
        return [
            {
                source: '/',
                destination: '/home-page',
            },
        ]
    },
}

module.exports = nextConfig
