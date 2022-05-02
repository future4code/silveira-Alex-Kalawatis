import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { styled as Styled } from '@material-ui/core/styles';

export const AdminCard = styled.div`
    display: flex;
    justify-content: space-between;
    width: 31.25em;
    height: 2.5em;
    color:#FFFDDF;
    border-radius: 1.25em;
    background-color: #1B173395;
    box-shadow: 3px 3px 6px #9F5F82;
    /* padding: 10px; */
    margin: 20px;
    p{
        align-items: center;
        margin-left: 15px ;
        margin-top: 10px;
        text-align: center ;
        :hover{
            cursor: pointer;
        }
    }
`
const MyIconBtn = Styled(IconButton)({
    color: '#FFFDDF',
});
export function DelBtn(props){

    return(
        <MyIconBtn>
            <DeleteIcon onClick={()=>props.delTrip(props.id)}/>
        </MyIconBtn>
    )
}