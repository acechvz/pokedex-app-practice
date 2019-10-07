import React, { useState, useEffect } from 'react';
import { Image, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const typeStyles = {
    grass: '#61EDC7',
    fire: '#F7776C',
    water: '#58ABF8',
    bug: '#A8B820',
    electric: '#F8D030',
    poison: '#A040A0',
    ice: '#98D8D8',
    steel: '#B8B8D0',
    dragon: '#7038F8',
    normal: '#A8A878',
    flying: '#A890F0',
    fairy: '#FFAEC9',
    dark: '#705848',
    fighting: '#C03028',
    rock: '#B8A038',
    ghost: '#705898',
    psychic: '#F85888',
    ground: '#E0C068'
};

const PokeItem = styled.View`
    background-color:white;
    margin: 2%;
    padding: 10px;
    border-radius: 10px;
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: visible;
    position: relative;
    height: 110px;
`

const PokeInfo = styled.Text`
    width: 60%;
    font-weight: 500;
    text-transform: capitalize;
    font-size: 14px;
    color: #666;
`

const PokeThumb = styled.Image`
   max-width: 40%;
   max-height: 75%;
`

const getTypeStyle = ({types}) => {
    let $type = null;
    types.map( type => {
        const _type = type.toLowerCase();
        if(typeStyles.hasOwnProperty(_type))
            $type = typeStyles[_type]
    });

    return $type;
}

const PokeImage = ( {image} ) => {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    useEffect(() => {
        Image.getSize(
            image,
            (width, height) => {
                setWidth(width);
                setHeight(height);
            },
            console.log('image error')
        )
    }, []);

    if (height && width) {
        return (
            <PokeThumb
                source={{ uri: image }}
                style={{ width, height, resizeMode: 'contain' }}
                resizeMethod="resize"
                resizeMode="contain"/>
        )
    } else {
        return <ActivityIndicator size="small" />
    }
}

function PokeCard({ pokemon }) {
    const typeColor = getTypeStyle(pokemon);

    return (
        <PokeItem style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderColor: typeColor || '#fff',
            borderWidth: 1
        }}>
            <PokeInfo>
                { pokemon.name }
            </PokeInfo>
            <PokeImage image={ pokemon.image } />
        </PokeItem>
    );
}

export default PokeCard;