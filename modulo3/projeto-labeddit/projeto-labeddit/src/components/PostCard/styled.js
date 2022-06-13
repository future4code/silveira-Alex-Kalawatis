import styled from 'styled-components'

export const PostContainer = styled.div`
    width: 22.75rem;
    height: auto;
    background-color:#f8f8ff;
    border-radius: 0.75rem;
    border: 1px solid black;
    padding: 10px;
    margin:10px;
    box-shadow: 2px 3px 3px #E5FAFF;
`
export const PostLikeDislikeButton = styled.img`
    width: 0.875rem ;
    height: 1rem;
    :hover{
        cursor: pointer;
    }
`
export const PostCommentButton = styled.img`
    width: 0.875rem ;
    height: 1rem;
`
export const CommentImg = styled.img`
    width: 0.875rem ;
    height: 1rem;
    background-color: #E5FAFF;
`
export const LikeDislikeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:  3.75rem;
`
export const LikeContainer = styled.div`
    
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    border-radius: 0.5rem;
    border: 1px solid black;
`              
export const DivCommentConteiner = styled.div`
    
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px;
    border-radius: 0.5rem;
    border: 1px solid black;
    :hover{
        background-color: #ace0f9;
        cursor: pointer;
    }
`
export const LikeCommentContainer = styled.div`
    
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    padding: 0.2rem;
    margin: 0.2rem;
    
`
export const UsernameContainer = styled.div`
    width: 60%;
    margin: 0.5rem 0 1.125rem 0;
    font-size: 80%;

`
export const TitleBodyContainer = styled.div`
    margin-bottom: 1.375rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
`