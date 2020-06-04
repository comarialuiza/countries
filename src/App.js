import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import Countries from './containers/Countries';

function App() {
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/'
  })

  return (
    <ApolloProvider client={ client }>
      <Countries />
    </ApolloProvider>
  );
}

export default App;
