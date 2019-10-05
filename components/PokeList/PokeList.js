import React from 'react';
import { Text, SafeAreaView, FlatList } from 'react-native';
import styled from 'styled-components/native';
import PokeCard from './PokeCard';

const PokeItems = styled.SafeAreaView`
    flex: 1;
    padding: 15px 0;
`

function PokeList({ pokemons }) {
    return (
        <PokeItems>
            <FlatList
                scrollIndicatorInsets={ false }
                data={ pokemons }
                keyExtractor={ (item, idx) => idx.toString()  }
                renderItem={ ({item}) => <PokeCard pokemon={ item } /> }
                numColumns={2}
             />
        </PokeItems>
    )
}

export default PokeList;