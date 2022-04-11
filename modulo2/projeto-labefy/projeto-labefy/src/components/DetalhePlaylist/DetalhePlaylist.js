import React from "react";
import axios from "axios";
import styled from "styled-components"

export default class DetalhePlaylist extends React.Component{

    state={ 
        details:[],
        nameMusic: '',
        artist:'',
        url:'',
        playlistId: this.props.id
        
    }
    componentDidMount(){
        this.getPlaylistTracks();
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
    getPlaylistTracks = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
        const headers = {
            headers:{
                Authorization: "alex-kalawatis-silveira"
            }
        }
        axios
        .get(url,headers)
        .then((resp) => {
            this.setState({details: resp.data.tracks, playlistId: ''})
            console.log(resp)
            
        }).catch((err)=>{
            alert("Nao foi possivel obter as musicas da playlist")
            console.log(err)
        })
    }
    addTrackToPlaylist = () =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`
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
            alert(`Musica foi adicionada à playlist com sucesso`)
            this.setState({nameMusic:"",artist:"",url:""})
        }).catch((err)=>{
            alert(`Error ao adicionar musica `)
            console.log(err)
        })
    }


    render(){
        const trackList = this.state.details.map((list)=>{
            return(
                <div key={list.id}>
                    <p>{list.name}</p>
                    <p>{list.artist}</p>
                    <p>{list.url}</p>
                </div>
            )
        })
        return(
            
            <div>
                <div>
                    {trackList} 
                    
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