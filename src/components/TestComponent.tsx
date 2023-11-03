'use client'
import React from 'react'

export const TestComponent = () => {
    const [count, setCount] = React.useState(0)

    return <div onClick={() => setCount(count + 1)}> {count}</div>
}
