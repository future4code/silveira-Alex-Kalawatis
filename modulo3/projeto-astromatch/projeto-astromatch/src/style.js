import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
`
export const MainApp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex:1;
    min-height:100vh;
    background-color: lightgray;
`
