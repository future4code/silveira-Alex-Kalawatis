import React from "react";
import axios from "axios";
import styled from "styled-components"

const ListPlaylist = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    border-radius: 10px;
    background-color: whitesmoke;
    &:hover{
        cursor: pointer;
        background-color: lightgreen;
        box-shadow: 3px 3px 6px white;
    }
`


export default class Playlist extends React.Component{

    state={
        
        listOfPlaylist: []

    }
    componentDidMount(){
        this.getAllPlaylists();
    }
    getAllPlaylists = () =>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const headers ={
            headers:{
                Authorization: "alex-kalawatis-silveira"
            }
        }
        axios.get(url,headers)
        .then((resp)=>{
            this.setState({listOfPlaylist: resp.data.result.list})
            console.log(resp)
        })
        .catch((err)=>{
            alert("Error")
            console.log(err)
        })

    }
    deletePlaylist = playlist =>{
        const url =`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}`
        const headers ={
            headers:{
                Authorization: "alex-kalawatis-silveira"
            }
        }
        if(window.confirm(`Tem certeza que deseja apagar a ${playlist.name} ?`)){
            axios.delete(url,headers)
            .then(()=>{
                alert("Playlist apagada com sucesso")
                this.getAllPlaylists()
            }).catch((err)=>{
                alert("Erro ao apagar a playlist")
                console.log(err)
            })
        }


    }
    render(){
       
        const listPlaylist = this.state.listOfPlaylist.map((list)=>{
            return(
                <ListPlaylist 
                key={list.id}
                onClick={()=>this.props.goToDetalhePlaylist(list.id)}
                >
                    {list.name}
                    <button onClick={()=> this.deletePlaylist(list)}>Deletar</button>
                </ListPlaylist>
            )
        })
        return(
            <>
                <h2>Lista das playlists</h2>
                <div>  
                    {listPlaylist}
                </div>
            </>
        )
    }
}
