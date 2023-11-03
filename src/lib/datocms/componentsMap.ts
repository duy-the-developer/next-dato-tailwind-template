import { ReactNode } from 'react'
import { HeroBlock } from '@/blocks/HeroBlock/HeroBlock'
import { PhotosBlock } from '@/blocks/PhotosBlock/PhotosBlock'

export type ComponentsMap = {
    [key: string]: ReactNode
}

export const componentsMap = {
    hero_block: HeroBlock,
    photos_block: PhotosBlock,
}
