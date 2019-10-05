import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import PokeList from './components/PokeList/PokeList';
import axios from 'axios';
import { BASE_URL } from './constants';

const PokeWrapper = styled.View`
  flex: 1;
  padding: 30px 15px;
`;

const Heading = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    let $pokemons = [];
    for (let id = 1; id <= 10; id++) {
      const response = await axios.get(`${BASE_URL}pokemon/${id}`);
      const pokemon = await response.data;

      $pokemons = [ ...$pokemons, pokemon ];
    }

    setPokemons( $pokemons );
  }

  useEffect( () => {
    fetchPokemons();
  }, []);

  return (
    <PokeWrapper>
      <Heading>PokeAPI HOME!</Heading>      
      <PokeList pokemons={ pokemons } />
    </PokeWrapper>
  );
}

export default App;