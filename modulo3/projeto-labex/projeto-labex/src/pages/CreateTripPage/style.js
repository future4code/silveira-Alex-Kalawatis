import styled from "styled-components";
import { Button } from "@material-ui/core";
import { styled as Styled } from '@material-ui/core/styles';

export const CreateTripPageConteiner = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1B173395;
    box-shadow: 3px 3px 6px #9F5F82;
    border-radius: 1.25em;
    width: 31.25em;
    height: 60%;
    margin: 10px;
    padding: 10px;
`
export const TitleCreateTripPage = styled.h1`
    color: #FFFDDF;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 0.7;
    justify-content: center;
    select{
        background-color: #1B173399;
        color: #FFFDDF;
        margin: 0.625em;
        height: 2.50em;
        border-radius: 0.625em;
        padding-left: 0.3125em
    }
    input{
        background-color: #1B173399;
        color: #FFFDDF;
        margin: 0.625em;
        padding-left: 0.3125em;
        height: 2.50em;
        border-radius: 0.625em;
    }
    div{
        margin-top: 1.25em ;
        display: flex;
        justify-content: center;

    }
    
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
    'margin-top': '20px',
    'text-align': 'center'

});
export function CreteTripBtn (){
    return(
        <MyBtn type="submit" variant="contained" >Criar</MyBtn>
    )
}