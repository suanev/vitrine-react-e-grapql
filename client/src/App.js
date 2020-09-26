import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Routes } from './routes';
import client from './server/apiRequest';

import './globalStyle.scss'

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

export default App;
