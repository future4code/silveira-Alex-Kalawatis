import React from "react";
import logo from "../../assests/img/logoSite.png"
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/post"
import {LoginConteiner, Logo, LoginForm,EmailLoginInput,PasswordLoginInput,Line,LoginPageEnviarButton,LoginPageSignButton} from "./styled"
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage"
import { useNavigate } from "react-router-dom";
import {goToSignInPage} from "../../routes/coordinator"
import Header from "../../components/Header/Header";

function LoginPage() {
  useUnprotectedPage()
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({ email: '', password: '' })
  const onClickLogin = e => {
    e.preventDefault()
    login(form, navigate)
  }
  return (
    <LoginConteiner>
      <Header/>
      <Logo src={logo} alt="logo"/>
      <h3>LabEddit</h3>
      <p>A rede social feita pelos alunos da Labenu :)</p>
      <LoginForm onClick={onClickLogin}>
        <EmailLoginInput
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={onChange}
          type="text"
          required
        />
        <PasswordLoginInput
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          required
        />
        <div>
          <LoginPageEnviarButton type="submit">Entrar</LoginPageEnviarButton>
        </div>
      </LoginForm>
      <Line/>
      <LoginPageSignButton onClick={()=>goToSignInPage(navigate)}>Cadastre-se</LoginPageSignButton>
    </LoginConteiner>
  );
}

export default LoginPage;
