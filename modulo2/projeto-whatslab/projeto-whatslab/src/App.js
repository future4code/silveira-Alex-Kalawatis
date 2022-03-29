import React from 'react';
import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components'
import { Message } from './components/Message';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
`
const AppLayout = styled.div`
  display:flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid black;
  max-width: 33.25em;
  height: 100vh;
  background-color: beige;
  justify-content: center;

`
const MessageBox = styled.div`
  display:flex;
  flex: 1;
  justify-content: flex-end;
  flex-direction: column;

`

class App extends React.Component {
  constructor(){
    super()
    this.state ={message: []}
  }
  newMessage= (message) =>{
    this.setState({message: [...this.state.message,message]})
  }

  render(){
    return (
      <AppLayout>
        <GlobalStyle/>
        <MessageBox>
          {
          this.state.message.map((message,index) => <p key={index}><span>{message.user}</span>{': ' + message.text}</p> )
          }
        </MessageBox>
        <Message newMessage={this.newMessage}/>
        
      </AppLayout>
    );
  }

}

export default App;
