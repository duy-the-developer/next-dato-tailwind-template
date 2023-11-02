export const formatSlug = (slug: string | string[]) =>
    Array.isArray(slug) ? slug.join('/') : slug
