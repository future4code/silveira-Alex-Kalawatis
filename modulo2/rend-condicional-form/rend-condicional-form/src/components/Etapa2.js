import React from "react";
import PerguntaTexto from "./PerguntaTexto";

export default class Etapa2 extends React.Component{
    render(){
        return(
            <div>
                <h2>ETAPA 2 - Informações de Ensino Superior</h2>
                <PerguntaTexto pergunta={"Qual curso ?"}/>
                <PerguntaTexto pergunta={"Qual a unidade de ensino ?"}/>
            </div>
        );
    }
}