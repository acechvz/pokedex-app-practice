import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import styled from 'styled-components/native';
import PokeList from './components/PokeList/PokeList';
// import { BASE_URL } from './constants';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh'
});

const PokeWrapper = styled.View`
  flex: 1;
  padding: 30px 15px;
`;

const Heading = styled.Text`
  font-size: 18px;
  font-weight: bold;
`

function App() {
  return (
    <ApolloProvider client={client}>
      <PokeWrapper>
        <Heading>Pokedex</Heading>      
        <PokeList />
      </PokeWrapper>
    </ApolloProvider>
  );
}

export default App;