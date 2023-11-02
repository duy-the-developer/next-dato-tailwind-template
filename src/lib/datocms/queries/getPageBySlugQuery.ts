import { gql } from 'graphql-request'
import { HERO_BLOCK_FRAGMENT } from '@/blocks/HeroBlock/HeroBlock.fragment'

export const getPageBySlugQuery = (slug: string): string => gql`
  ${HERO_BLOCK_FRAGMENT}

  query PageQuery{
    _site {
        favicon {
            alt
            url
        }
    }
    page(filter: { slug: { in: "${slug}" } }) {
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
`
