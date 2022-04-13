import React from "react";
import styled from 'styled-components'
import axios from "axios";

const BotaoApaga = styled.button`
    width: 10%;
    margin: 5px;

`
const CardUser = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    background-color: whitesmoke;
    box-shadow: 3px 3px 5px darkgrey;
    border-radius: 10px;

`
const UsersContainer = styled.div`
    display:flex;
    flex: 1;
    
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
    deleteUser = user =>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`
        const headers ={
            headers:{
                Authorization: 'alex-kalawatis-silveira'
            }
        }
        if(window.confirm(`Tem certeza que deseja deletar ${user.name} ?`))
        axios.delete(url,headers)
        .then(()=>{
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
                <CardUser key={listaDeUsuario.id}>
                    {listaDeUsuario.name}
                    <BotaoApaga onClick={() => this.deleteUser(listaDeUsuario)}>X</BotaoApaga>
                </CardUser>
            )
            
        })
        return(
            <UsersContainer>
                {listaUsuario}
            </UsersContainer>

        )

    }
}