import { Container } from '@/components/Container'
import { SocialLink } from '@/components/SocialLink'
import {
    TwitterIcon,
    InstagramIcon,
    GitHubIcon,
    LinkedInIcon,
} from '@/components/Icons'

export function HeroBlock(props: any) {
    return (
        <Container className="mt-9">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl sm:leading-snug">
                    {props.headline}
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    {props.subHeadline}
                </p>
                <div className="mt-6 flex gap-6">
                    <SocialLink
                        href="https://twitter.com"
                        aria-label="Follow on Twitter"
                        icon={TwitterIcon}
                    />
                    <SocialLink
                        href="https://instagram.com"
                        aria-label="Follow on Instagram"
                        icon={InstagramIcon}
                    />
                    <SocialLink
                        href="https://github.com"
                        aria-label="Follow on GitHub"
                        icon={GitHubIcon}
                    />
                    <SocialLink
                        href="https://linkedin.com"
                        aria-label="Follow on LinkedIn"
                        icon={LinkedInIcon}
                    />
                </div>
            </div>
        </Container>
    )
}
