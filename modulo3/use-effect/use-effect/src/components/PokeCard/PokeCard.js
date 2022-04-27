import React, { useEffect, useState } from "react";
import axios from "axios";
import {PokemonContainer, ImgPokemon} from './style'

function PokeCard(props){
    const [pokemon, setPokemon] = useState({})

    const pegarPokemon = (pokeName) =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
        
        axios
        .get(url)
        .then((resp)=>{
            setPokemon(resp.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        pegarPokemon(props.pokeName)
    },[props.pokeName])
    console.log(pokemon)

    return(
        <div>
            <PokemonContainer>
                <p>{pokemon.name}</p>
                <p>{pokemon.weight} Kg</p>
                {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
                {pokemon.sprites && (
                    <ImgPokemon src={pokemon.sprites.front_default} alt={pokemon.name} />
                )}
            
            </PokemonContainer>
        </div>
        
    )
}
export default PokeCard;