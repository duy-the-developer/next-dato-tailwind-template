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

export default function PageLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { locale: Locale }
}) {
    return (
        <html lang={params.locale}>
            <Providers params={params}>
                <body className={''}>{children}</body>
            </Providers>
        </html>
    )
}
