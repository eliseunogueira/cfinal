import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'semantic-ui-css/semantic.min.css';
import Routes from './routes';
const token = localStorage.getItem('token');

const client = new ApolloClient({
  uri: 'http://localhost:8081/api',
  headers: { token },
});
const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById('root'));
