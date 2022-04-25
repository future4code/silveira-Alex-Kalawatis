import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { styled as Styled } from '@material-ui/core/styles';


export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25em;
    height: 37.5em;
    max-width: 25em;
    max-height: 37.5em;
    border: 1px solid black;
    background-color: white;
    border-radius: 5px;
    img{
        width:22.5em;
        height: 28.75em;
    }

`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 23.125em;
    img{
        position: relative;
       /*  top:7%; */
        left: 30%;
        width: 9.375em;
        height: 100%;
    }
`
export const CenterBox = styled.div`
    position: relative;
    align-self: center;
    margin: 5px;
    img{
        border-radius: 5px;
        box-shadow: 1px 1px 4px black;
    }
    p{
        color:white;
        font-size: 20px;
        padding: 5px;
        font-family: Arial, Helvetica, sans-serif;
    }

    > div{
        position: absolute;
        bottom: 0;
        width: 78%;
        background-color: #00000020;
        margin: 16px;
    }

`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-evenly;
`
const MyLikeButton = Styled(IconButton)({
    color: '#e53935',
    
});
const MyMatchPageButton = Styled(IconButton)({
    color: '#762D93',
    position: 'relative',
    left: '7%',

});
export function LikeButton(props){
    return(
        <MyLikeButton onClick={()=>props.click(true)} >
            <FavoriteIcon fontSize='large'/>
        </MyLikeButton>
    )
}
export function DislikeButton(props){
    return(
        <IconButton onClick={()=>props.click(false)}>
            <ClearOutlinedIcon fontSize='large'/>
        </IconButton>
    )
}

export  function MatchPageButton(props){
    return(
        <MyMatchPageButton  onClick={props.onClick} >
            <PeopleAltIcon fontSize='large'/>
        </MyMatchPageButton>
    )
}