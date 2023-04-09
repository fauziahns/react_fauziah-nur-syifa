import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import client from './apollo'
import GuestList from './components/GuestList/GuestList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
          <GuestList/>
  </ApolloProvider>
)