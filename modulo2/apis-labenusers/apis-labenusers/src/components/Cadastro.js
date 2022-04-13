import React from "react";
import styled from 'styled-components'
import axios from "axios";

const CadastroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  margin: 20px;
  border-radius:10px ;
  box-shadow: 3px 3px 5px darkgrey;
`
const InputDefault = styled.input`
    margin: 1em;
`
const ButtonCadastro = styled.button`
    margin-bottom: 0.5em;
`
const PageContainer = styled.div`
    display: flex;
    justify-content: center;
`
export default class Cadastro extends React.Component{
    state = {
        name: '',
        email:''
    }
    onNameChange = event =>{
        this.setState({name: event.target.value})
    }
    onEmailChange = event =>{
        this.setState({email: event.target.value})
    }
    postCreateUser = () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const headers ={
            headers:{
                Authorization: 'alex-kalawatis-silveira'
            }
        }
        const body = {
            name: this.state.name,
            email: this.state.email
        }
        axios.post(url,body,headers)
        .then(() =>{
            alert(`Usuario ${this.state.name} criado com sucesso`)
            this.setState({name:"", email:""})
        })
        .catch((error)=>{
            alert("Erro ao criar o usuario")
            console.log(error)
        })
    }
    render(){
        return(
            <PageContainer>
                <CadastroContainer>
                    <InputDefault
                        placeholder="Nome"
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <InputDefault
                        placeholder="Email"
                        type="text"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                    />
                    <ButtonCadastro onClick={this.postCreateUser}>Criar Usuario</ButtonCadastro>
                </CadastroContainer>
            </PageContainer>
            
        )
    }

}