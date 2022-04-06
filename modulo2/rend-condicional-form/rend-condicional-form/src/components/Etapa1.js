import React from "react";
import PerguntaTexto from "./PerguntaTexto";
import PerguntaMultipla from "./PerguntaMultipla";


export default class Etapa1 extends React.Component{
    render(){
       return(
            <div>
                <h2>ETAPA 1 - Dados Gerais</h2>
                <PerguntaTexto pergunta={"1- Qual seu nome ?"}/>
                <PerguntaTexto pergunta={"2- Qual sua idade ?"}/>
                <PerguntaTexto pergunta={"3- Qual seu email ?"}/>
                <PerguntaMultipla pergunta={"4 - Qual a sua escolaridade ?"} options={["Ensino médio incompleto", "Ensino médio completo","Ensino superior incompleto","Ensino superior completo"]}/>
            </div>
       );

    }
}