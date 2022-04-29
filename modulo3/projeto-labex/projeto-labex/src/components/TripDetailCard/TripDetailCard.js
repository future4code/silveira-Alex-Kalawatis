import React from "react";

export default function TripDetailCard(props){
    
    return(
        <div>
            <div><h1>{props.name}</h1></div>
            <p>Nome: {props.name}</p>
            <p>Planeta: {props.planet}</p>
            <p>Descrição: {props.description}</p>
            <p>Data: {props.date}</p>
            <p>Duração: {props.durationInDays} dias</p>
        </div>
    )

}