import React from "react";
import Header from "../../components/Header/Header";
import { createPost } from "../../services/post"
import { useForm } from "../../hooks/useForm"
import { FeedContainer, FormStyled, InputBodyStyled, InputTitleStyled,PostsContainer,PostButton,LinePost,LoadingFeed } from "./styled"
import { useRequestData } from "../../hooks/useRequestData";
import Loading from "../../assests/img/Loading.gif"
import { baseURL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import { goToPostPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";


function FeedPage() {
  useProtectedPage()

  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({ title: '', body: '' })
  const [posts, isLoading, error, getData] = useRequestData(`${baseURL}/posts`)

  const onClickCreatePost = e => {
    e.preventDefault()
    createPost(form, clear)
  }
  
console.log(posts)

  /* username, title, body, voteSum, commentCount */
  const listOfPosts = posts && posts.map((post) => {
    return (
      <PostsContainer key={post.id}>
        <PostCard
        username={post.username}
        title={post.title}
        body={post.body}
        voteSum={post.voteSum}
        commentCount={post.commentCount}
        id={post.id}
        userVote={post.userVote}
        getData={getData}
        onClick={()=>goToPostPage(navigate,post.id)}
      />
      </PostsContainer>
      
    )
  })
 

  return (
    <FeedContainer>
      <Header />
      <FormStyled onSubmit={onClickCreatePost}>
        <InputTitleStyled
          name="title"
          value={form.title}
          type="text"
          placeholder="Titulo do post"
          onChange={onChange}
          pattern={'^.{5,}$'}
          title="Minimo de 5 caracteres"
          required
        />
        <InputBodyStyled
          name="body"
          value={form.body}
          type='text'
          placeholder="Escreva seu comentario"
          onChange={onChange}
          pattern={'^.{15,}$'}
          title='15 caracteres minimos'
          required
        />
        <PostButton type="submit">Postar</PostButton>
      </FormStyled>
      <LinePost/>
      
        {isLoading && <LoadingFeed src={Loading}/>}
        {!isLoading && error && <h2>Nao Carregou</h2>}
        {!isLoading && listOfPosts &&
          (listOfPosts.length>0 ? (
            listOfPosts
          ) : (
            <h1>Posts Nao Encontrados</h1>
          ))}
          
          
    </FeedContainer>
  );
}

export default FeedPage;
