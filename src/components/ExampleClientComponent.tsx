'use client'

import { useIntl } from 'react-intl'

export default function ExampleClientComponent() {
    const { formatMessage } = useIntl()

    return (
        <>
            <h2>I am a client component</h2>
            <h3>{formatMessage({ id: 'home_greeting' })}</h3>
        </>
    )
}
