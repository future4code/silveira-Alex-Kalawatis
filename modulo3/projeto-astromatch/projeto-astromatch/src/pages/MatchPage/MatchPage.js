import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'

const MatchContainer = styled.div`
    display: flex;
    border: 1px solid black;
    max-width: 25em;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    img{
        max-width: 50px;
        border-radius: 50%;
    }
`
export default function MatchPage(props){
    const [matchList,setMatchList]= useState([])

    useEffect(()=>{
        getMatches()
    },[])

    const getMatches = ()=>{
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Alex-Kalawatis-Silveira/matches')
        .then((resp)=>{
            console.log(resp)
            setMatchList(resp.data.matches)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    console.log(matchList)
    const listOfMatches = matchList.map((matches)=>{
        return(
            <MatchContainer>
                <img src={matches.photo} alt={'Profile_Photo'}/>
                <p>{matches.name}</p>
            </MatchContainer>
        )
    })
    const clearMatch = () =>{
        const headers ={
            headers:{
                "Content-Type": "application/json"
            }
        }
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Alex-Kalawatis-Silveira/clear',headers)
        .then((resp)=>{
            console.log(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div>
            <header>
                <button onClick={()=>props.changePage('home')}>voltar</button>
            </header>
            <div>
                {listOfMatches}
            </div>
            <button onClick={clearMatch}>Limpar Matches</button>
        </div>
    )
}