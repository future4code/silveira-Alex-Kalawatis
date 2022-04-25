import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button'
import { styled as Styled } from '@material-ui/core/styles';

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    max-width: 25em;
    max-height: 37.5em;
    border: 1px solid black;
    background-color: white;
    border-radius: 5px;
    overflow-y: auto;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 23.125em;
    img{
        position: relative;
        right: 25%;
        width: 9.375em;
        height: 100%;
    }
`
export const MatchContainer = styled.li`
    display: flex;
    /* border: 1px solid black; */
    max-width: 25em;
    max-height: 3.75em;
    /* justify-content: ; */
    align-items: center;
    margin: 10px;
    padding: 10px;
    :hover{
        cursor: pointer;
        background-color: #7cd7c9;
        box-shadow: 3px 3px 6px #762d93;
    }
`

export const ProfilePhoto = styled.img`
  height: 3.125em;
  width: 3.125em;
  margin-right: 10px;
  border-radius: 50%;
  background: url(${props => props.src});
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
`
const MyClearButton = Styled(Button)({
    background: 'linear-gradient(45deg, #7A3596 30%, #49A598 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    padding: '0 30px',
    position: 'absolute',
    width: '25rem',
});

export function ClearButton(props) {
    return (
        <MyClearButton variant='contained' size='medium' onClick={() => props.click()}>Limpar Matches</MyClearButton>
    )
}
const MyReturnToSwipe = Styled(IconButton)({
    color: '#49a598'
});
export function ReturnToSwipe(props) {
    return (
        <MyReturnToSwipe onClick={props.onClick}>
            <ArrowBackIcon fontSize='large' />
        </MyReturnToSwipe>
    )

}
