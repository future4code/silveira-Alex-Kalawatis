import axios from "axios";
import React from "react"
import { BASE_URL } from "../../constants/urls"
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToAdminHomePage } from "../../routes/coordinator";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { useForm } from "../../hooks/useForm";



export default function LoginPage() {
    useUnprotectedPage()
    const navigate = useNavigate()
    const [form, onChange] = useForm({ email: '', password: '' })

    const onSubmitLogin = (body, navigate) => {

        axios.post(`${BASE_URL}login`, body)
            .then((resp) => {
                console.log('deu certo', resp)
                localStorage.setItem('token', resp.data.token)
                goToAdminHomePage(navigate)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const onClickLogin = (e) => {
        e.preventDefault()
        onSubmitLogin(form, navigate)
    }


    return (
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <form onSubmit={onClickLogin}>
                    <input
                        placeholder="E-mail"
                        name="email"
                        type='email'
                        onChange={onChange}
                        value={form.email}
                        required
                    />
                    <input
                        placeholder="Senha"
                        name="password"
                        type='password'
                        onChange={onChange}
                        value={form.password}
                        required
                    />
                    <div>
                        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                        <button type='submit'>Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}