/* This is an example of a client component consuming the translations
 * using the useIntl hook from react-intl. */
'use client'

import { useIntl } from 'react-intl'

export function ExampleClientComponent() {
    const { formatMessage } = useIntl()

    return (
        <>
            <h2>I am a client component</h2>
            <h3>{formatMessage({ id: 'home_greeting' })}</h3>
        </>
    )
}
