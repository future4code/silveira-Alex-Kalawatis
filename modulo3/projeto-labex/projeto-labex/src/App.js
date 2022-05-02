import React from "react";
import {Router} from "./routes/Router"
import {createGlobalStyle} from 'styled-components'
import Background from "./assets/img/501296.png"
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    /* color: #ffffff; */
  }
  body {
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
  }
`
const AppContainer = styled.div`
  	display:flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`
function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <Router/>
    </AppContainer>
  );
}

export default App;
