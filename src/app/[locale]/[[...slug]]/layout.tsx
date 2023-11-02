import React from 'react'
import type { Metadata } from 'next'

// i18n
import type { Locale } from '@/i18nConfig'
import i18nConfig from '@/i18nConfig'
import { Providers } from '@/components/Providers'

export function generateStaticParams() {
    return i18nConfig.locales.map((locale: Locale) => ({ locale }))
}

export const metadata: Metadata = {
    //TODO: add metaData
}

export default function HomePageLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { locale: Locale }
}) {
    return (
        <html
            lang={params.locale}
            className="h-full antialiased"
            suppressHydrationWarning
        >
            <Providers params={params}>
                <body className="flex h-full bg-zinc-50 dark:bg-black">
                    <main className="flex-auto">{children}</main>
                </body>
            </Providers>
        </html>
    )
}
