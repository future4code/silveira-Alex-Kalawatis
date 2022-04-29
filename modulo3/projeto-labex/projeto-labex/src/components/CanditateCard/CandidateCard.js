import React from "react";

export default function CandidateCard(props) {

    return (
        <div>
            <div>
                <p>Nome: {props.name}</p>
                <p>Profissão: {props.profession}</p>
                <p>Idade: {props.age}</p>
                <p>País: {props.country}</p>
                <p>Texto de Candidatura: {props.applicationText}</p>
            </div>
            <div>
                <button onClick={()=>props.decide(props.candidateId,true)}>Aprovar</button>
                <button onClick={()=>props.decide(props.candidateId,false)}>Reprovar</button>
            </div>

        </div>
    )
}