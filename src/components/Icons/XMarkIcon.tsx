import React from 'react'
import { cn } from '@/utils/clsxMerge'

export const XMarkIcon = ({
    className,
    ...rest
}: React.ComponentPropsWithoutRef<'svg'>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cn('h-6 w-6', className)}
            {...rest}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    )
}
