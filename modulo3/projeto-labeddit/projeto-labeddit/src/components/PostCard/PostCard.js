import React from "react";
import { PostContainer, PostLikeDislikeButton, LikeContainer, DivCommentConteiner,PostCommentButton, LikeCommentContainer, UsernameContainer, TitleBodyContainer } from "./styled";
import UpBlankArrowIcon from "../../assests/icons/ArrowUpBlank.png"
import UpContainedArrowIcon from "../../assests/icons/ArrowUpConteined.png"
import Comment from "../../assests/icons/comment.png"
import DownBlankArrowIcon from "../../assests/icons/ArrowDownBlank.png"
import DownContainedArrowIcon from "../../assests/icons/ArrowDownContained.png"
import axios from "axios";
import { goToPostPage } from "../../routes/coordinator";
import { baseURL } from "../../constants/urls";
import { useNavigate } from "react-router-dom";

export default function PostCard(props) {
    const navigate = useNavigate()
    const { username, title, body, voteSum, commentCount, userVote, id,getData,onClick } = props

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
            axios.post(`${baseURL}/posts/${id}/votes`,body,Headers)
            .then(()=>{
                console.log("sucesso")
                getData()
            })
            .catch((err)=>{
                console.log(err)
            })
        }else if(direction===-1){
            axios.put(`${baseURL}/posts/${id}/votes`,body,Headers)
            .then(()=>{
                console.log("sucesso")
                getData()
            })
            .catch((err)=>{
                console.log(err)
            })
        }else{
            axios.delete(`${baseURL}/posts/${id}/votes`,Headers)
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
                <h4>{title}</h4>
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
                        <DivCommentConteiner onClick={onClick}>
                            <PostCommentButton src={Comment} alt='comentario' />
                            <p>{commentCount === null ? 0 : commentCount}</p>
                        </DivCommentConteiner>
                    </LikeCommentContainer>

                ) : voteSum > 0 ? (
                    <LikeCommentContainer>
                        <LikeContainer>
                            {userVote === 1 ? <PostLikeDislikeButton src={UpContainedArrowIcon} alt="icone_curtir" onClick={handleLike}/> : <PostLikeDislikeButton src={UpBlankArrowIcon} alt="icone_curtir" onClick={handleLike} />}
                            <p>{voteSum}</p>
                            {userVote === -1 ? <PostLikeDislikeButton src={DownContainedArrowIcon} alt="icone_curtir" onClick={handleDislike}/> : <PostLikeDislikeButton src={DownBlankArrowIcon} alt="icone_descurtir" onClick={handleDislike}/>}
                        </LikeContainer>
                        <DivCommentConteiner onClick={onClick}>
                            <PostCommentButton src={Comment} alt='comentario' />
                            <p>{commentCount === null ? 0 : commentCount}</p>
                        </DivCommentConteiner>
                    </LikeCommentContainer>
                ) : (
                    <LikeCommentContainer>
                        <LikeContainer>
                            {userVote === 1 ? <PostLikeDislikeButton src={UpContainedArrowIcon} alt="icone_curtir" onClick={handleLike} /> : <PostLikeDislikeButton src={UpBlankArrowIcon} alt="icone_curtir" onClick={handleLike}/>}
                            {userVote === -1 ?<PostLikeDislikeButton src={DownContainedArrowIcon} alt="icone_curtir" onClick={handleDislike} />:<PostLikeDislikeButton src={DownBlankArrowIcon} alt="icone_descurtir" onClick={handleDislike} />}
                            <p>{voteSum}</p>
                        </LikeContainer>
                        <DivCommentConteiner onClick={onClick}>
                            <PostCommentButton src={Comment} alt='comentario' />
                            <p>{commentCount === null ? 0 : commentCount}</p>
                        </DivCommentConteiner>
                    </LikeCommentContainer>
                )}
            </div>
        </PostContainer>
    )

}