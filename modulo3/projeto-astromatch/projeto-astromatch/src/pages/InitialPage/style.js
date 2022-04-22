import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { styled as Styled } from '@material-ui/core/styles';


export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 25em;
    max-height: 37.5em;
    border: 1px solid black;
    background-color: white;
    border-radius: 5px;
    img{
        width:21.875em;
        height: 430px;
    }

`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 23.125em;
    img{
        position: relative;
        top:30%;
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
    color: '#762D93'
});
export function LikeButton(props){
    return(
        <MyLikeButton size='large' onClick={()=>props.click(true)} >
            <FavoriteIcon/>
        </MyLikeButton>
    )
}
export function DislikeButton(props){
    return(
        <IconButton onClick={()=>props.click(false)}>
            <ClearOutlinedIcon/>
        </IconButton>
    )
}
export  function MatchPageButton(props){
    return(
        <MyMatchPageButton  onClick={props.onClick} >
            <DoubleArrowIcon/>
        </MyMatchPageButton>
    )
}