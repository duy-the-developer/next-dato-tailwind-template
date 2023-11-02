import React from 'react'
import type { Locale } from '@/i18nConfig'
import getIntl from '@/messages/getIntl'
import { fetchDatoContent, ComponentParser } from '@/lib/datocms'
import { getPageBySlugQuery } from '@/lib/datocms/queries'
import { notFound } from 'next/navigation'
import { LanguageToggle } from '@/components/LanguageChanger'
import { formatSlug } from '@/utils/formatSlug'
import util from 'util'

type PageProps = {
    params: {
        locale: Locale
        slug: string[]
    }
}

export function generateStaticParams({ params }: PageProps) {
    console.log(params)
    return []
}

export default async function Page({ params }: PageProps) {
    const int = await getIntl(params.locale)
    const { data } = await fetchDatoContent(
        getPageBySlugQuery({
            locale: params.locale,
            slug: formatSlug(params.slug),
        }),
    )

    console.log(util.inspect(data, false, null, true /* enable colors */))
    console.log(util.inspect(params, false, null, true /* enable colors */))
    if (!data?.page) {
        console.log('Catch all: Page not found')
        return notFound()
    }

    return (
        <>
            <h1 className="text-4xl font-bold">
                {int.formatMessage({ id: 'home_title' })}
            </h1>
            <p className="text-lg">Current locale: {params.locale}</p>
            <LanguageToggle />
            {data?.page?.body?.map((block: any) => (
                <ComponentParser key={block.id} data={block} />
            ))}
        </>
    )
}
