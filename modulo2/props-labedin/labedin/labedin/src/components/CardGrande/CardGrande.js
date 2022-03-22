import React from 'react';
import styled from 'styled-components';


const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImgBig = styled.img`
    width: 80px;
    margin-right: 10px;
    border-radius: 50%;
`
const BigH4 = styled.h4`
    margin-bottom: 15px;
`
const ConteudoBig = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    
    
    return (
        <BigCard>
            <ImgBig src={ props.imagem } />
            <ConteudoBig>
                <BigH4>{ props.nome }</BigH4>
                <p>{ props.descricao }</p>
            </ConteudoBig>
        </BigCard>
    )
}

export default CardGrande;