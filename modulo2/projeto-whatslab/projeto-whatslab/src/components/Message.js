import React from "react";
import styled from "styled-components";

const MessageLayout = styled.div`
    display: flex;
    background-color: white;
`
const UserName = styled.input`
    width: 6.25em;
    background-color: white;
`
const MessageInput = styled.input`
    flex: 1;
    background-color: white;
`
export class Message extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            userName: '',
            textInput:''
        }
    }
    onChangeText = (event) =>{
        this.setState({textInput: event.target.value})
    }
    onChangeUser = (event) =>{
        this.setState({userName: event.target.value})
    }
    onMessage = () =>{
        const message ={
            user: this.state.userName,
            text: this.state.textInput
        }
        this.props.newMessage(message)
        this.setState({textInput: ''})
    }
    
    render(){
        return(
            <MessageLayout>
                <UserName type="text" placeholder={'User'} onChange={this.onChangeUser} value={this.state.userName}/>
                <MessageInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText} value={this.state.textInput}/>
                <button onClick={this.onMessage} >Enviar</button>
            </MessageLayout>

        );
    }
}