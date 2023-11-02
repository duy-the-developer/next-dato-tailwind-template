import { gql } from 'graphql-request'

const parentFragment = gql`
    fragment parent {
        slug
        parent {
           ...parent
        }
    }
`
