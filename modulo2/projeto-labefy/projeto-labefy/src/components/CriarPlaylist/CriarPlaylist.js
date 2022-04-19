import axios from "axios";
import React from "react";
import styled from "styled-components"

export default class CriarPlaylist extends React.Component{

    state={
        namePlaylist: '',
        
    }
    onChangeNomePlaylist = e =>{
        this.setState({namePlaylist: e.target.value})
    }
   

    createPlaylist = () =>{

        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.namePlaylist
        }
        const headers ={
            headers:{
                Authorization: "alex-kalawatis-silveira"
            }
        }
        axios
        .post(url,body,headers).then(()=>{
            alert(`Playlist ${this.state.namePlaylist} criada com sucesso`)
            this.setState({namePlaylist:""})
        }).catch((err)=>{
            alert("Error ao criar a playlist.")
            console.log(err)
        })
    }
    

    render(){
        return(
            <div>
                <div>
                    <h3>Criar Playlist</h3>
                    <input
                    placeholder="Nome da nova playlist"
                    type="text"
                    value={this.state.namePlaylist}
                    onChange={this.onChangeNomePlaylist}
                    />
                    <button onClick={this.createPlaylist}>Criar Playlist</button>
                </div>
               
                
            </div>
            
        )
    }
}