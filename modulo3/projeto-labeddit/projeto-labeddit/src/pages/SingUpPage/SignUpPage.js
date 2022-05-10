import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import {useForm} from '../../hooks/useForm'
import {signUp} from '../../services/post'
import {SingUpConteiner,SingUpForm,EmailSingUpInput,UserNameInput,TitleSingUpPage,PasswordSingUpInput,SingUpButton} from './styled'

function SignUpPage() {
  const [form, onChange, clear] = useForm({ username: '', email: '',password:''})
  const navigate = useNavigate()

  const onClickSignUp = e=>{
    e.preventDefault()
    signUp(form,navigate)
  }

  return (
    <SingUpConteiner>
      <Header/>
      <TitleSingUpPage>Olá, boas vindas ao LabEddit !</TitleSingUpPage>
      <SingUpForm onSubmit={onClickSignUp}>
        <UserNameInput
        placeholder="Nome de usuário"
        type='text'
        name='username'
        value={form.username}
        onChange={onChange}
        required
        />
        <EmailSingUpInput
        placeholder="E-mail"
        type='text'
        name='email'
        value={form.email}
        onChange={onChange}
        required
        />
        <PasswordSingUpInput
        placeholder="Senha"
        type='password'
        name='password'
        value={form.password}
        onChange={onChange}
        required
        />
        <div>
          <SingUpButton type="submit">Cadastrar</SingUpButton>
        </div>

      </SingUpForm>
    </SingUpConteiner>
  );
}

export default SignUpPage;