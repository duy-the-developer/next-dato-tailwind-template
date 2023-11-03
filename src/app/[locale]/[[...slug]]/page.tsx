import React from 'react'
import type { Locale } from '@/i18nConfig'
import { fetchDatoContent, ComponentParser } from '@/lib/datocms'
import { getPageBySlugQuery } from '@/lib/datocms/queries'
import { notFound } from 'next/navigation'
import util from 'util'

export type PageProps = {
    params: {
        locale: Locale
        slug: string[]
    }
}

export default async function Page({ params }: PageProps) {
    const { data } = await fetchDatoContent(
        getPageBySlugQuery({
            locale: params.locale,
            slug: params.slug[params.slug.length - 1],
        }),
    )

    if (!data?.page) {
        return notFound()
    }

    return (
        <>
            {data?.page?.body?.map((block: any) => (
                <ComponentParser key={block.id} data={block} />
            ))}
        </>
    )
}
