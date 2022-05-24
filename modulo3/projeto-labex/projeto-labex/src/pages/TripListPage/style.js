import styled from "styled-components";
import { Button } from "@material-ui/core";
import { styled as Styled } from '@material-ui/core/styles';

export const TripListContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
`
export const TitleContainer = styled.div`
    margin: 10px;
    padding:10px ;
    h1{
        color:#FFFDDF;
    }
`
export const TripCardContainer = styled.div`
    
    width: 31.25em;
    height: 22%;
    color:#FFFDDF;
    border-radius: 1.25em;
    background-color: #1B173395;
    box-shadow: 3px 3px 6px #9F5F82;
    padding: 10px;
    margin: 20px;
    p{
        margin: 10px;
        text-align: justify;
    }
    
`
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Loading = styled.h1`
    color: #FFFDDF;
   
`
const MyTripBtn = Styled(Button)({
    background: 'linear-gradient(45deg, #822B3C 30%, #AE515E 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#FFFDDF',
    height: 40,
    'margin-right': '30px',
    'margin-left': '30px',
    'margin-top': '20px',
    'text-align': 'center'

  });
  const TripListBtnContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
  `
export function TripListBtn (props){
    return(
        <TripListBtnContainer>
            <MyTripBtn onClick={()=>props.goToA(props.nav)} variant="contained" >Voltar</MyTripBtn>
            <MyTripBtn onClick={()=>props.goToB(props.nav)} variant="contained">Inscrever-se</MyTripBtn>
        </TripListBtnContainer>
    )
}
