import React from "react";
import styled from "styled-components";

const MessageLayout = styled.div`
    display: flex;
`
const UserName = styled.form`
    width: 6.25em;
`
const MessageInput = styled.div`
    flex: 1;
`
export class Message extends React.Component{
    
    render(){
        return(
            <MessageLayout>
                <UserName type="text" placeholder={'User'} onChange='' value=''/>
                <MessageInput type="text" placeholder={'Mensagem'} onChange='' value=''/>
                <button >Enviar</button>
            </MessageLayout>

        );
    }
}
export default Message