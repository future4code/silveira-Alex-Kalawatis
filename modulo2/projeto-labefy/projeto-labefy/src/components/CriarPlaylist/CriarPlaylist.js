import axios from "axios";
import React from "react";
import styled from "styled-components"

export default class CriarPlaylist extends React.Component{

    state={
        namePlaylist: '',
        nameMusic: '',
        artist:'',
        url:''
    }
    onChangeNomePlaylist = e =>{
        this.setState({namePlaylist: e.target.value})
    }
    onChangeNameTrack = e =>{
        this.setState({nameMusic: e.target.value})
    }
    onChangeArtistTrack = e =>{
        this.setState({artist: e.target.value})
    }
    onChangeTrackUrl = e =>{
        this.setState({url: e.target.value})
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
    addTrackToPlaylist = (playlist) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`
        const body ={
            name: this.state.nameMusic,
            artist: this.state.artist,
            url: this.state.url
        }
        const headers ={
            headers:{
                Authorization: "alex-kalawatis-silveira"
            }
        }
        axios.post(url,body,headers)
        .then(()=>{
            alert(`Musica ${this.state.nameMusic} foi adicionada à playlist ${playlist.name} com sucesso`)
            this.setState({nameMusic:"",artist:"",url:""})
        }).catch((err)=>{
            alert(`Error ao adicionar musica ${playlist.name}`)
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
                <div>
                    <h3>Adicionar musicas a playlist</h3>
                    <input
                    placeholder="Nome da musica"
                    type="text"
                    value={this.state.nameMusic}
                    onChange={this.onChangeNameTrack}
                    />
                    <input
                    placeholder="Nome do artista"
                    type="text"
                    value={this.state.artist}
                    onChange={this.onChangeArtistTrack}
                    />
                    <input
                    placeholder="URL da musica"
                    type="text"
                    value={this.state.url}
                    onChange={this.onChangeTrackUrl}
                    />
                    <button onClick={this.addTrackToPlaylist}>Adicionar musica</button>
                </div>
                
            </div>
            
        )
    }
}