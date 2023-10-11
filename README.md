This is a [Next.js](https://nextjs.org/) template project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Technology Stack

This project uses [DatoCMS](https://www.datocms.com/) as the Content Management System and [Tailwind CSS](https://tailwindcss.com/) for styling.

For internationalization support, we use [`next-i18n-router`](https://github.com/i18nexus/next-i18n-router) along side [`react-intl`](https://www.npmjs.com/package/react-intl).

## CI/CD

CI/CD is handled by any hosting provider of your choice, we use [husky]() precommit hook for code formatting and lint checking.

## Test Suite

Test suite is also not provided to give flexibility back to the code owner of the project to decide on the most suitable solution depending on project size and needs.

## TODO

Bellow is a list of //TODO items you will find throughout the project that is required before the project is production ready. You will find helpful resource linked in each item. 

- [ ] Customize `tailwind.config.ts` as required, if the project is content heavy, consider adding [tailwind-typography](https://tailwindcss.com/docs/typography-plugin)
- [ ] Add [fonts](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [ ] Add static OR generate dynamic [meta data](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [ ] Add [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) to dynamic routes
- [ ] Add [favicon](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons)
- [ ] Add static OR generate [`robots.txt`](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)

