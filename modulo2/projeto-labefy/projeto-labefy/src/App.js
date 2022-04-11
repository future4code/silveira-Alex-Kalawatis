import React from "react";
import styled from "styled-components"
import CriarPlaylist from "./components/CriarPlaylist/CriarPlaylist"
import DetalhePlaylist from "./components/DetalhePlaylist/DetalhePlaylist";
import Playlist from "./components/Playlist/Playlist";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const AppContainer = styled.div`

`
const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 82vh;
  background-color: gray;
`
const TituloH2 = styled.h2`
  color: lightgreen;
  position: relative;
  left: 2vw;
`
const LogoHeader = styled.img`

`

const Cabecalho = styled.header`
  display: flex;
  justify-content : space-between;
  align-items: center;
  background-color: black;
  height: 13vh;
`
const RodaPe = styled.footer`
  text-align: center;
  background-color: black;
  height: 5vh;

`
const ButtonInicio = styled.button`
  width: 100px;
  height: 50px;
  position: relative;
  left: 20vw;
  &:hover{
    background-color: lightgreen;
  }
`
const ButtonCriar = styled.button`
   width: 100px;
   height: 50px;
   position: relative;
   right: 5vw;
   &:hover{
    background-color: lightgreen;
  }
`

const TextoRodaPe = styled.p`
  color: white;
  
`

class App extends React.Component {
  
  state={
    currentPage: 'list',
    clickedPlaylistId: ''
  }

  selectPage = () => {
    switch(this.state.currentPage){
      case 'list': 
        return <Playlist goToDetalhePlaylist={this.goToDetalhePlaylist} goToCriarPlaylist={this.goToCriarPlaylist}/>
      case 'new':
        return <CriarPlaylist goToPlaylist={this.goToPlaylist}/>
      case 'detail':
        return <DetalhePlaylist goToPlaylist={this.goToPlaylist} id={this.state.clickedPlaylistId}/>
      default:
        return <Playlist goToDetalhePlaylist={this.goToDetalhePlaylist} goToCriarPlaylist={this.goToCriarPlaylist}/>
    }
  }
  goToDetalhePlaylist = (playlistId) =>{
    this.setState({currentPage: 'detail',clickedPlaylistId: playlistId})
  }
  goToCriarPlaylist = () =>{
    this.setState({currentPage: 'new', clickedPlaylistId:''})
  }
  goToPlaylist = () => {
    this.setState({currentPage: 'list', clickedPlaylistId:''})
  }

  
  render(){
    return (
      <AppContainer>
        <GlobalStyle/>
        <Cabecalho>
          <TituloH2>LABEfy</TituloH2>
          <LogoHeader src=""/>
        <ButtonInicio onClick={this.goToPlaylist}>Inicio</ButtonInicio>
        <ButtonCriar onClick={this.goToCriarPlaylist}>Criar Playlist</ButtonCriar>
        </Cabecalho>
        <hr/>
        <MainContainer>{this.selectPage()}</MainContainer>
        <hr/> 
        <RodaPe>
          <TextoRodaPe>©Copyright 2022 by Alex Kalawatis. All rights reversed.</TextoRodaPe>
        </RodaPe>
      </AppContainer>
    );
  } 
}

export default App;
