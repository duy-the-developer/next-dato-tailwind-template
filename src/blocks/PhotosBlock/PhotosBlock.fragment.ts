import { gql } from 'graphql-request'

export const PHOTOS_BLOCK_FRAGMENT = gql`
    fragment PhotosBlockFragment on PhotosBlockRecord {
        id
        _modelApiKey
        photos {
            responsiveImage(
                imgixParams: { auto: compress, fm: webp, fit: crop, ar: "9:10" }
            ) {
                ...ResponsiveImageFragment
            }
        }
    }
`
