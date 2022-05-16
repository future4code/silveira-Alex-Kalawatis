import React from "react";
import { baseURL } from "../../constants/urls";
import { PostContainer, PostLikeDislikeButton, LikeContainer,LikeCommentContainer, UsernameContainer, TitleBodyContainer } from "../PostCard/styled"
import UpBlankArrowIcon from "../../assests/icons/ArrowUpBlank.png"
import UpContainedArrowIcon from "../../assests/icons/ArrowUpConteined.png"
import DownBlankArrowIcon from "../../assests/icons/ArrowDownBlank.png"
import DownContainedArrowIcon from "../../assests/icons/ArrowDownContained.png"
import axios from "axios";

function CommentCard(props){

    const { username, body, voteSum, userVote, id,getData} = props

    const decideVote = (id, direction) => {
        const Headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        const body = {
            direction: direction
        }
        if(direction === 1){
            axios.post(`${baseURL}/comments/${id}/votes`,body,Headers)
            .then(()=>{
                console.log("sucesso")
                getData()
            })
            .catch((err)=>{
                console.log(err)
            })
        }else if(direction===-1){
            axios.put(`${baseURL}/comments/${id}/votes`,body,Headers)
            .then(()=>{
                console.log("sucesso")
                getData()
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            axios.delete(`${baseURL}/comments/${id}/votes`,Headers)
            .then(()=>{
                console.log("sucesso")
                getData()
            })
            .catch((err)=>{
                console.log(err)
            })
        }

    }
    const handleLike = () =>{
        if(userVote === 1){
            decideVote(id)
        }else{
            decideVote(id,1)
        }
    }
    const handleDislike = () =>{
        if(userVote === -1){
            decideVote(id)
        }else{
            decideVote(id,-1)
        }
    }


    return (
        <PostContainer>
            <UsernameContainer>
                <p>Enviado por: <b>{username}</b></p>
            </UsernameContainer>
            <TitleBodyContainer>
                <p>{body}</p>
            </TitleBodyContainer>
            <div>
                {voteSum === null ? (
                    <LikeCommentContainer>
                        <LikeContainer>
                            {userVote === 1 ? <PostLikeDislikeButton src={UpContainedArrowIcon} alt="icone_curtir" onClick={handleLike}/> : <PostLikeDislikeButton src={UpBlankArrowIcon} alt="icone_curtir" onClick={handleLike}/>}
                            <p>{0}</p>
                            {userVote === -1 ? <PostLikeDislikeButton src={DownContainedArrowIcon} alt="icone_curtir" onClick={handleDislike} /> : <PostLikeDislikeButton src={DownBlankArrowIcon} alt="icone_descurtir" onClick={handleDislike}/>}
                        </LikeContainer>
                    </LikeCommentContainer>

                ) : voteSum > 0 ? (
                    <LikeCommentContainer>
                        <LikeContainer>
                            {userVote === 1 ? <PostLikeDislikeButton src={UpContainedArrowIcon} alt="icone_curtir" onClick={handleLike}/> : <PostLikeDislikeButton src={UpBlankArrowIcon} alt="icone_curtir" onClick={handleLike} />}
                            <p>{voteSum}</p>
                            {userVote === -1 ? <PostLikeDislikeButton src={DownContainedArrowIcon} alt="icone_curtir" onClick={handleDislike}/> : <PostLikeDislikeButton src={DownBlankArrowIcon} alt="icone_descurtir" onClick={handleDislike}/>}
                        </LikeContainer>
                    </LikeCommentContainer>
                ) : (
                    <LikeCommentContainer>
                        <LikeContainer>
                            {userVote === 1 ? <PostLikeDislikeButton src={UpContainedArrowIcon} alt="icone_curtir" onClick={handleLike} /> : <PostLikeDislikeButton src={UpBlankArrowIcon} alt="icone_curtir" onClick={handleLike}/>}
                            {userVote === -1 ?<PostLikeDislikeButton src={DownContainedArrowIcon} alt="icone_curtir" onClick={handleDislike} />:<PostLikeDislikeButton src={DownBlankArrowIcon} alt="icone_descurtir" onClick={handleDislike} />}
                            <p>{voteSum}</p>
                        </LikeContainer>
                    </LikeCommentContainer>
                )}
            </div>
        </PostContainer>
    )

}

export default CommentCard;