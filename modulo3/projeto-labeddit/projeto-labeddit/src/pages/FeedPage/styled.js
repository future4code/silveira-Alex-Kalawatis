import styled from "styled-components"

export const FeedContainer = styled.div`
    height: 100vh;
`
export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputTitleStyled = styled.input`
    margin: 1rem 2rem 0px 2rem;
    width: 22.75rem;

`
export const InputBodyStyled = styled.input`
    width: 22.75rem;
    height: 8.1875rem;
    margin: 0px 2rem 0px 2rem;
    text-align: center;

`
export const LinePost = styled.hr`
    width:  22.75rem;
    position: relative;
    left: 7.5%;
`
export const LoadingFeed = styled.img`
    position: relative;
    /* top: 28.9375rem; */
    left: 10%;
    
`
export const PostButton = styled.button`
    width:  22.75rem ;
    height:3.1875rem;
    border-radius: 0.75rem;
    margin: 0.75rem 0 0.75rem 0;
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`