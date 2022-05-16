import React from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../../components/ComentCard/ComentCard";
import {LoadingFeed} from "../FeedPage/styled"
import Loading from "../../assests/img/Loading.gif"
import Header from "../../components/Header/Header";
import PostCard from "../../components/PostCard/PostCard";
import { baseURL } from "../../constants/urls";
import { useForm } from "../../hooks/useForm";
import {DetailContainer,LinePostD,InputBodyPostStyled,PostDetailButton,FormStyledDetail} from "./styled"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { createComment } from "../../services/post";

function PostPage() {
  useProtectedPage()
  const [form,onChange,clear] = useForm({body:''})
  const params = useParams()
  const [postDetail,isLoading,error,getData] = useRequestData(`${baseURL}/posts/${params.id}/comments`)
  const [post] = useRequestData(`${baseURL}/posts`)
  console.log(postDetail)
  
  const postMap = post && post.map((p)=>{
    if(p.id === params.id){
      return(
        <PostCard key={p.id}
        username={p.username}
        title={p.title}
        body={p.body}
        voteSum={p.voteSum}
        commentCount={p.commentCount}
        id={p.id}
        userVote={p.userVote}
        />
      )
    }
  })
  const listOfComments = postDetail && postDetail.map((detail)=>{
    return(
      <CommentCard key={detail.id}
      username={detail.username}
      body={detail.body}
      voteSum={detail.voteSum}
      id={detail.id}
      userVote={detail.userVote}
      getData={getData}
      />
    )
  })
  const onSubmitComment = e =>{
    e.preventDefault()
    createComment(form,params.id,clear,getData)
  }
  
  return (
    <DetailContainer>
      <Header/>

      <div>{postMap}</div>
      
      <FormStyledDetail onSubmit={onSubmitComment}>
        <InputBodyPostStyled
        placeholder="Escreva seu comentario"
        type="text"
        name="body"
        value={form.body}
        onChange={onChange}
        required
        />
          <PostDetailButton type="submit">Responder</PostDetailButton>
      </FormStyledDetail>
      <LinePostD/>
      <div>
      {isLoading && <LoadingFeed src={Loading}/>}
        {!isLoading && error && <h2>Nao Carregou</h2>}
        {!isLoading && listOfComments &&
          (listOfComments.length>0 ? (
            listOfComments
          ) : (
            <h1>Posts Nao Encontrados</h1>
          ))}
      </div>
    </DetailContainer>
  );
}

export default PostPage;