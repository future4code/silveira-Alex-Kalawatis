import React from "react";
import { TripDetailCardContainer } from "./style";

export default function TripDetailCard(props){
    
    return(
        <TripDetailCardContainer>
            <div><h1>{props.name}</h1></div>
            <p><b>Nome:</b> {props.name}</p>
            <p><b>Planeta:</b> {props.planet}</p>
            <p><b>Descrição:</b> {props.description}</p>
            <p><b>Data:</b> {props.date}</p>
            <p><b>Duração:</b> {props.durationInDays} dias</p>
        </TripDetailCardContainer>
    )

}