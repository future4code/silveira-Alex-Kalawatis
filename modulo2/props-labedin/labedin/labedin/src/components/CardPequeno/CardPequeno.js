import React from "react";
import styled from 'styled-components';

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
`
const ImgSmall = styled.img`
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`
const SmallH4 = styled.h4`
    margin-bottom: 15px;
`
const ConteudoSmall = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
`

function CardPequeno (props) {

    return(
        <SmallCard>
            <ImgSmall src={props.imagem} />
            <ConteudoSmall>
                <SmallH4>{props.tipo}</SmallH4>
                <p>{props.conteudo}</p>
            </ConteudoSmall>

        </SmallCard>
    )

}

export default CardPequeno;