import React, { Component } from 'react'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import Hej from './Hej'
import { ApolloProvider } from "react-apollo"

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  uri: '/.netlify/functions/graphql',
  connectToDevTools: false, // Enabling devtools in production if true
})

// Default State
cache.writeData({
  data: {
    someField: 'some value!!',
  },
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Hej/>
      </ApolloProvider>
    )
  }
}
