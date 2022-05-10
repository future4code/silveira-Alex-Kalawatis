import React from "react";
import Header from "../../components/Header/Header";
import { createPost } from "../../services/post"
import { useForm } from "../../hooks/useForm"
import { FeedContainer, FormStyled, InputBodyStyled, InputTitleStyled } from "./styled"
import { useRequestData } from "../../hooks/useRequestData";
import { baseURL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";

function FeedPage() {
  useProtectedPage()

  const [form, onChange, clear] = useForm({ title: '', body: '' })
  const [posts, isLoading, error] = useRequestData(`${baseURL}/posts`)

  const onClickCreatePost = e => {
    e.preventDefault()
    createPost(form, clear)
  }
  const listOfPosts = posts && posts.map((post) => {
    return (
      <div></div>
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
        />
        <InputBodyStyled
          name="body"
          value={form.body}
          type='text'
          placeholder="Escrevs seu comentario"
          onChange={onChange}
          pattern={'^.{15,}$'}
          title='15 caracteres minimos'
        />
        <button type="submit">Postar</button>
      </FormStyled>
      <h1>Feed Page</h1>
    </FeedContainer>
  );
}

export default FeedPage;
