import styled from 'styled-components'
import { Button } from "@material-ui/core";
import { styled as Styled } from '@material-ui/core/styles';

export const CandidateCardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 31.25em;
height: 250px;
color:#FFFDDF;
border-radius: 1.25em;
background-color: #1B173395;
box-shadow: 3px 3px 6px #9F5F82;
/* padding: 10px; */
margin-top: 20px;
p{
    align-self: start;
    margin-left: 15px ;
    margin-top: 10px;
    /* text-align: center ; */

}
`
const MyBtn = Styled(Button)({
    background: 'linear-gradient(45deg, #822B3C 30%, #AE515E 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#FFFDDF',
    height: 30,
    'margin-right': '30px',
    'margin-left': '30px',
    'margin-bottom': '20px',
    'margin-top': '20px',
    'text-align': 'center'

  });
export function AproveBtn (props){
    return(     
        <MyBtn onClick={()=>props.decide(props.candidateId,true)} variant="contained" >Aprovar</MyBtn>       
    )
}
export function DeclineBtn (props){
    return(     
        <MyBtn onClick={() =>props.decide(props.candidateId,false)} variant="contained" >Reprovar</MyBtn>       
    )
}