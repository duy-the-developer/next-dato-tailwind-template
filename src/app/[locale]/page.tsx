import React from 'react'
import type { Locale } from '@/i18nConfig'
import getIntl from '@/messages/getIntl'
import ExampleClientComponent from '@/components/ExampleClientComponent'

type HomeProps = {
    params: {
        locale: Locale
    }
}

export default async function Home({ params }: HomeProps) {
    const int = await getIntl(params.locale)

    return (
        <main className="">
            <h1 className="text-4xl font-bold">
                {int.formatMessage({ id: 'home_title' })}
            </h1>
            <p className="text-lg">Current locale: {params.locale}</p>
            <ExampleClientComponent />
        </main>
    )
}
