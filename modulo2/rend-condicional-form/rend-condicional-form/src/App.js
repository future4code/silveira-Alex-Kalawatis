import React from "react";
import styled from "styled-components";
import Etapa1  from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
   
  }
`
const Main = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`
const Botao = styled.button`
  max-width: 10em;

  margin: 20px;

`
export default class extends React.Component {
  state = {
    etapas: 1,
  }
  escolheEtapa = () => {
    switch(this.state.etapas){
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
      default:
        return <Final/>;  
    }

  };
  atualizaEtapa = () =>{
    this.setState({etapas: this.state.etapas + 1});
  }
  render(){
    return(
      <Main>
        <GlobalStyle/>
        {this.escolheEtapa()} 
        <br/>
        {this.state.etapas!==4 ? <Botao onClick={this.atualizaEtapa}>Proxima etapa</Botao> : <p>Finalizado</p>}
      </Main>
    );
  }

}

