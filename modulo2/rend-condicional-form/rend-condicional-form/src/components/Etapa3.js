import React from "react";
import PerguntaTexto from "./PerguntaTexto";
import PerguntaMultipla from "./PerguntaMultipla";

export default class Etapa3 extends React.Component{
   
    render(){
        return(
            <div>
                <h2>ETAPA 3 - Informações gerais de Ensino</h2>
                <PerguntaTexto pergunta={"Por que você não terminou um curso de graduação ?"}/>
                <PerguntaMultipla pergunta={"Você fez algum curso complementar ?"} options={["Nenhum","Curso técnico","Curso de ingles","Outro"]}/>
            </div>
        );
    }
}