import React from 'react'
import type { Locale } from '@/i18nConfig'
import getIntl from '@/messages/getIntl'
import { fetchDatoContent, ComponentParser } from '@/lib/datocms'
import { getPageBySlugQuery } from '@/lib/datocms/queries'
import { notFound } from 'next/navigation'
import { LanguageToggle } from '@/components/LanguageToggle'
import { getAllPagesSlugQuery } from '@/lib/datocms/queries/getAllPagesSlugQuery'
import { getAllSlugsFromNestedObject } from '@/utils'
import util from 'util'

type PageProps = {
    params: {
        locale: Locale
        slug: string[]
    }
}

export async function generateStaticParams({ params }: PageProps) {
    const res = await fetchDatoContent(
        getAllPagesSlugQuery({ locale: params.locale, depth: 4 }),
    )
    const result = res.data?.allPages?.map((page: any) => {
        return { slug: getAllSlugsFromNestedObject(page) }
    })

    return result
}

export default async function Page({ params }: PageProps) {
    const int = await getIntl(params.locale)
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
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                {int.formatMessage({ id: 'home_title' })}
            </h1>
            <p className="text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                Current locale: {params.locale}
            </p>
            <LanguageToggle />
            <div>Hello</div>
            {data?.page?.body?.map((block: any) => (
                <ComponentParser key={block.id} data={block} />
            ))}
        </>
    )
}
