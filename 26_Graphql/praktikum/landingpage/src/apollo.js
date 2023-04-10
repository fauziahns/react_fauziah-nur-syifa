import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri : 'https://fair-hamster-74.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers : {
        'x-hasura-admin-secret':'1bTgk6yF2r8IfCAg2Rm0c4taA9ntHTivHsJQEaxRQcqwAeOZUkWFbDRCdgp0zNhf'
    }
})
export default client