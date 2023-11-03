import { gql } from 'graphql-request'
import i18nConfig, { Locale } from '@/i18nConfig'
import { generateRecursiveQuery } from '@/utils'

type Params = {
    locale: Locale
    depth?: number
}

export const getAllPagesSlugQuery = ({ locale, depth = 0 }: Params): string => {
    const l = i18nConfig.locales.includes(locale)
        ? locale
        : i18nConfig.defaultLocale

    const queryField = 'parent' // Replace with the fields you need
    const nestedFields = ['slug']
    return gql`
        query AllPagesQuery {
          allPages (locale: ${l}) {${generateRecursiveQuery(
              queryField,
              nestedFields,
              depth,
          )}
        }
    }
`
}
