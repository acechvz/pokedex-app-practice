import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import styled from 'styled-components/native';
import PokeList from './components/PokeList/PokeList';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh'
});

const PokeWrapper = styled.View`
  flex: 1;
  padding: 30px 15px 0;
`;

const Heading = styled.View`
  padding-top: 60px;
  padding-bottom: 15px;
  position: relative;
`

const Pokeball = styled.Image`
  position: absolute;
  right: -15px;
  top: 0;
  width: 200px;
  height: 200px;
  opacity: .03;
`

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`

function App() {
  return (
    <ApolloProvider client={client}>
      <PokeWrapper>
        <Heading>
          <Pokeball
              source={ require('./assets/pokeball-icon.png') }
              style={ { resizeMode: 'cover', transform: [ { translateX: 40}, {translateY: -40 } ] } } />
          <Title>Pokedex</Title>                          
        </Heading>
        <PokeList />
      </PokeWrapper>
    </ApolloProvider>
  );
}

export default App;