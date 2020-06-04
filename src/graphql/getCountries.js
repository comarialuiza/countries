import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
    query countries {
        countries {
            code
            name
            native
            emoji
            languages {
                code
                name
            }
        }
    }
`;