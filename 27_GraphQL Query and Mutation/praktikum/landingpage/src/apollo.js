import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri : 'https://premium-loon-68.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret':'nGuRkQwXKgQDRBpBbnigBgW21Xtq1BI17PiRpiyYlcgEDLAsnvFzY2haTNGZEYEr'
    }
})
export default client