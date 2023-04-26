import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from '@apollo/client/link/ws'
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httplink = new HttpLink({
    uri : 'https://premium-loon-68.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret':'nGuRkQwXKgQDRBpBbnigBgW21Xtq1BI17PiRpiyYlcgEDLAsnvFzY2haTNGZEYEr'
    }
})

const splitlink = split(
    ({query}) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wslink,
    httplink,
)

const wslink = new WebSocketLink({
    uri : 'https://premium-loon-68.hasura.app/v1/graphql',
    options: {
        reconnect: true,
        connectionParams : {
            headers: {
                'x-hasura-admin-secret':'nGuRkQwXKgQDRBpBbnigBgW21Xtq1BI17PiRpiyYlcgEDLAsnvFzY2haTNGZEYEr'
            }
        }
    }
})

const client = new ApolloClient({
    link: splitlink,
    cache : new InMemoryCache(),
})

export default client