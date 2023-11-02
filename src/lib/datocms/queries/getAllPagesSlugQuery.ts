import { gql } from 'graphql-request'
import i18nConfig, { Locale } from '@/i18nConfig'

type Params = {
    locale: Locale
}

export const getAllPageSlugsQuery = ({ locale }: Params): string => {
    const l = i18nConfig.locales.includes(locale)
        ? locale
        : i18nConfig.defaultLocale

    return gql`
      query AllPagesSlugQuery{
        allPages( locale: ${l} ) {
            slug
        }
      }
`
}
