import React from 'react'

import { getAllPagesSlugQuery } from '@/lib/datocms/queries/getAllPagesSlugQuery'
import { getAllSlugsFromNestedObject } from '@/utils'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PageProps } from './page'
import { fetchDatoContent, ComponentParser } from '@/lib/datocms'
import util from 'util'

export async function generateStaticParams({ params }: PageProps) {
    const res = await fetchDatoContent(
        getAllPagesSlugQuery({ locale: params.locale, depth: 4 }),
    )
    const result = res.data?.allPages?.map((page: any) => {
        return { slug: getAllSlugsFromNestedObject(page) }
    })

    return result
}

export default function HomePageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
