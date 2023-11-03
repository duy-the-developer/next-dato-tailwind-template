import { cn } from '@/utils'
import { Image } from 'react-datocms'
import { Container } from '@/components/Container'

type Props = {
    className?: string
    photos: any[]
}

export function PhotosBlock(props: Props) {
    const { photos } = props
    let rotations = [
        'rotate-2',
        '-rotate-2',
        'rotate-2',
        'rotate-2',
        '-rotate-2',
    ]

    return (
        <div className="mt-16 overflow-hidden sm:mt-20">
            <Container>
                <div className="-my-4 flex max-w-full justify-center gap-5 py-4 sm:gap-8">
                    {photos.map((image, imageIndex) => (
                        <div
                            key={image.responsiveImage.src}
                            className={cn(
                                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                                rotations[imageIndex % rotations.length],
                            )}
                        >
                            <Image data={...image?.responsiveImage} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
