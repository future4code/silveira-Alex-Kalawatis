import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PokeCard from './components/PokeCard/PokeCard'
import styled from 'styled-components'

const MainContainer = styled.div`
  display:flex;
  justify-content:center ;
  align-items: center;
`
const CustomSelect = styled.select`
  height: 40px;
  text-align: center;
  
`


function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName,setPokeName] = useState("")
  
  const pokemonList = ()=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151'

    axios
    .get(url)
    .then((resp)=> {
      console.log(resp)
      setPokeList(resp.data.results)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    pokemonList()
  },[])
  console.log(pokeList)

  const onChangePokeName = e =>{
    setPokeName(e.target.value)
  }
  
  return (
    <div>
      <MainContainer>
        <CustomSelect onChange={onChangePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {

            return(
              <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
            )
          })}
        </CustomSelect>

      </MainContainer>
      
      <MainContainer> {pokeName && <PokeCard pokeName={pokeName}/>}</MainContainer>
     
    </div>
  );
}

export default App;
