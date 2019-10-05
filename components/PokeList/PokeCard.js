import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const PokeItem = styled.View`
    background-color:white;
    margin: 2%;
    padding: 10px;
    border-radius: 5px;
    flex: 1;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
`

const PokeInfo = styled.Text`
    font-weight: 500;
    text-transform: capitalize;
`

const PokeThumb = styled.View`
    width: 50%;
`

const PokeImage = ({ image }) => {
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    useEffect(() => {
        console.log('fetching image');
        Image.getSize(
            image,
            (width, height) => {
                setWidth(width);
                setHeight(height);
            },
            console.error
        )
    }, []);

    if (height && width) {
        return (
            <PokeThumb>
                <Image source={{ uri: image }} style={{ width, height, resizeMode: 'cover' }} />
            </PokeThumb>
        )
    } else {
        return <ActivityIndicator size="small" />
    }
}

function PokeCard({ pokemon }) {
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
        }}>
            <PokeInfo>
                { pokemon.name }
            </PokeInfo>
            <PokeImage image={pokemon.sprites.front_default} />
        </PokeItem>
    );
}

export default PokeCard;