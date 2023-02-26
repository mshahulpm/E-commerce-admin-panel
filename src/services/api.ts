import { ApolloClient, createHttpLink, InMemoryCache, DefaultOptions, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { getAuthToken, deleteAuthToken } from './Token'

const errorLink = onError(({ graphQLErrors, networkError }) => {

    if (networkError) {
        if (networkError.message === 'Failed to fetch') {
            //   need to check auth error and handle it 
        }
    }
    else {
        graphQLErrors = graphQLErrors || []
        const err_code = graphQLErrors[0]?.extensions?.code;
        if (err_code === 'UNAUTHENTICATED') {

        }
    }
});

const defaultOptions: DefaultOptions = {
    watchQuery: {
        fetchPolicy: "no-cache",
    },
    query: {
        fetchPolicy: "no-cache",
    },
};

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL + '/graphql' as string
});

const authLink = setContext((_, context) => {
    let token: string | undefined
    token = getAuthToken()
    return {
        headers: {
            ...context.headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: from([authLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions
});
export default client;
