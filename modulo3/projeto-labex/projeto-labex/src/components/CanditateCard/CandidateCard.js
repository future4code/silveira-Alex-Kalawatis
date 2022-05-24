import React from "react";
import { CandidateCardContainer,AproveBtn,DeclineBtn } from "./style";

export default function CandidateCard(props) {

    return (
        <CandidateCardContainer>
            <div>
                <p><b>Nome:</b> {props.name}</p>
                <p><b>Profissão:</b> {props.profession}</p>
                <p><b>Idade:</b> {props.age}</p>
                <p><b>País:</b> {props.country}</p>
                <p><b>Texto de Candidatura:</b> {props.applicationText}</p>
            </div>
            <div>
                <AproveBtn decide={props.decide} candidateId={props.candidateId}/>
                <DeclineBtn decide={props.decide} candidateId={props.candidateId}/>
            </div>

        </CandidateCardContainer>
    )
}