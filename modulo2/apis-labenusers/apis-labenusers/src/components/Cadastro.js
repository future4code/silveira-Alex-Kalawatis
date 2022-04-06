import React from "react";
import styled from 'styled-components'
import axios from "axios";

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
            <div>
                <input
                    placeholder="Nome"
                    type="text"
                    value={this.state.name}
                    onChange={this.onNameChange}
                />
                   <input
                    placeholder="Email"
                    type="text"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                />
                <button onClick={this.postCreateUser}>Criar Usuario</button>
            </div>
        )
    }

}