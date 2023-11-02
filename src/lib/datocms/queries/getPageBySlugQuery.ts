import { gql } from 'graphql-request'
import { HERO_BLOCK_FRAGMENT } from '@/blocks/HeroBlock/HeroBlock.fragment'
import i18nConfig, { Locale } from '@/i18nConfig'

type Params = {
    locale: Locale
    slug: string
}

export const getPageBySlugQuery = ({ locale, slug }: Params): string => {
    const l = i18nConfig.locales.includes(locale)
        ? locale
        : i18nConfig.defaultLocale

    return gql`
      query PageQuery{
        _site {
            favicon {
                alt
                url
            }
        }
        page( locale: ${l} filter: { slug: { in: "${slug}" } }) {
            _seoMetaTags {
                attributes
                tag
                content
            }
            body {
                ...HeroBlockFragment
            }
        }
      }

      ${HERO_BLOCK_FRAGMENT}
`
}
