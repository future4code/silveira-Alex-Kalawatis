import React from "react";
import Cadastro from "./components/Cadastro";
import Users from "./components/Users";
import styled from "styled-components"

const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`
class App extends React.Component {
  state ={
    paginaAtual: 'Cadastro'
  }
  onChangePagina = () =>{
    if(this.state.paginaAtual === 'Cadastro'){
      this.setState({paginaAtual: 'Users'})
    }else{
      this.setState({paginaAtual:'Cadastro'})
    }

  }
  
  render(){
    return (
      <div>
        <button onClick={this.onChangePagina}>Trocar pagina</button>
        {this.state.paginaAtual === 'Cadastro' ? <Cadastro/> : <Users/>}
      </div>
    );
  
  }

}

export default App;
