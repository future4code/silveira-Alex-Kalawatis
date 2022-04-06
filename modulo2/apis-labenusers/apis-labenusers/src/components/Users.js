import React from "react";
import styled from 'styled-components'
import axios from "axios";

const BotaoApaga = styled.span`
    color: red;

`


export default class Users extends React.Component{
    state = {
        listaDeUsuario:[],
        
    }
    componentDidMount(){
        this.getAllUsers();
    } 

    getAllUsers = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const headers = {
            headers:{
                Authorization: 'alex-kalawatis-silveira'
            }
        }

        axios.get(url,headers)
        .then((resp)=>{
            this.setState({listaDeUsuario: resp.data})

        })
        .catch((error)=>{
            alert("Error")
            console.log(error)
        })   
    }
    deleteUser = idUsuario =>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`
        const headers ={
            headers:{
                Authorization: 'alex-kalawatis-silveira'
            }
        }
        axios.delete(url,headers).then(()=>{
            alert("Usuario apagado com sucesso")
            this.getAllUsers()
        })
        .catch((error) => {
            alert("Error ao apagar usuario")
            console.log(error)
        })
    }
    render(){

        const listaUsuario = this.state.listaDeUsuario.map((listaDeUsuario) =>{
            return(
                <li key={listaDeUsuario.nome}>
                    {listaDeUsuario.name}
                    <BotaoApaga onClick={() => this.deleteUser(listaDeUsuario.id)}> x</BotaoApaga>
                </li>
            )
            
        })
        return(
            <div>
                <ul>{listaUsuario}</ul>

            </div>
        )

    }
}