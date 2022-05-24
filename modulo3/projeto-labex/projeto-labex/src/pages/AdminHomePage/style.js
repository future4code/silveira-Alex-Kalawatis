import styled from "styled-components";
import { Button } from "@material-ui/core";
import { styled as Styled } from '@material-ui/core/styles';


export const AdminHomeContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
`
export const TitleAdminPage = styled.h1`
    color: #FFFDDF;
    text-align: center;
    margin: 0.625em;
`
export const ButtomContainer = styled.div`
    display:flex;
    justify-content: space-evenly;
` 
const MyBtn = Styled(Button)({
    background: 'linear-gradient(45deg, #822B3C 30%, #AE515E 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#FFFDDF',
    height: 40,
    'margin-right': '30px',
    'margin-left': '30px',
    'margin-bottom': '20px',
    'text-align': 'center'

  });
export function BackBttn (props){
    return(     
        <MyBtn onClick={()=>props.goTo(props.nav)} variant="contained" >Voltar</MyBtn>       
    )
}
export function CreateBtn (props){
    return(     
        <MyBtn onClick={()=>props.goTo(props.nav)} variant="contained" >Criar Viagem</MyBtn>       
    )
}
export function LogoutBtn (props){
    return(     
        <MyBtn onClick={()=>props.logOut(props.nav)} variant="contained" >Logout</MyBtn>       
    )
}
