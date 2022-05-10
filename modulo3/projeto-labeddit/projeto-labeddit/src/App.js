import React from "react";
import styled from "styled-components"
import GlobalState from "./global/GlobalState";
import { Router } from "./routes/Router"
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
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
      <GlobalState>

        <Router />

      </GlobalState>
    </AppContainer>
  );  
}

export default App;
