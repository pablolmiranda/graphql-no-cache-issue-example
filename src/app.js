import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, graphql } from 'react-apollo';
import gql from 'graphql-tag';

const BookQuery = gql`
  query {
    books {
      title
      author
    }
  }
`;

const client = new ApolloClient({
  link: new HttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    const data = this.props.data;
    const { loading, books } = data;

    if (loading) {
      return 'Loading';
    }

    if (!books) {
        return 'Query doesn\'t returned the books collection';
    }

    return (
      <div>
        <div>List of books:</div>
        { books.forEach(book => <div>{book.title}</div>) }
      </div>
    );
  }
}

const Container = graphql(BookQuery, {
  options: {
    fetchPolicy: 'no-cache' // remove this line to see the data
  }
})(App);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Container />
  </ApolloProvider>,
  document.getElementById('app-container')
);
