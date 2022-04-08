import React from "react";
import styled from "styled-components"
import CriarPlaylist from "./components/CriarPlaylist/CriarPlaylist";
import Playlist from "./components/Playlist/Playlist";

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <header>
          cabecalho
        <button>Trocar tela</button>
        </header>
        <hr/>
        <CriarPlaylist/>
        <hr/>
        <Playlist/>
        <hr/>
        <footer>
          Roda pe
        </footer>
      </div>
    );
  } 
}

export default App;
