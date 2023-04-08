import { ApolloClient, InMemoryCache } from "@apollo/client";

const apollo = new ApolloClient({
    uri: 'https://inviting-woodcock-10.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret': '54Ac3T9QGb6EqOIf8jclyudEgJdIWoIjhkaT4F7YrkTPViFHe8NA2NG4Pftf369q'
    }
}) 