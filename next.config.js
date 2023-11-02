/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites() {
        return [
            {
                source: '/en',
                destination: '/en/home-page',
            },
            {
                source: '/fr',
                destination: '/fr/page-daccueil',
            },
        ]
    },
}

module.exports = nextConfig
