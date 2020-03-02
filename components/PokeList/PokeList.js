import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import { Text, FlatList, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import PokeCard from './PokeCard';

const GET_26_POKEMONS = gql`
  {
    pokemons(first:26) {
      id
      name
      image
      types
    }
  }
`

const PokeItems = styled.View`
    flex: 1;
    padding: 15px 0 0 0;
`

const List = () => {
    const { data, error, loading } = useQuery(GET_26_POKEMONS);

    if(error) return <Text>Error!</Text>
    if(loading) return <ActivityIndicator size="large" />

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={ data.pokemons }
            keyExtractor={ (item, idx) => idx.toString()  }
            renderItem={ ({item}) => <PokeCard pokemon={ item } /> }
            numColumns={2}
            />
    )
}

function PokeList() {

    return (
        <PokeItems>
            <List />
        </PokeItems>
    )
}

export default PokeList;