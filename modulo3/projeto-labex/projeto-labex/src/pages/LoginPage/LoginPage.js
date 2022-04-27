import axios from "axios";
import React from "react"
import {BASE_URL} from "../../constants/urls"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage,goToAdminHomePage } from "../../routes/coordinator";



export default function LoginPage(){
    const navigate = useNavigate()
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const onChangeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const onChangePassword = (e)=>{
        setPassword(e.target.value)
    }

    const onSubmitLogin = () =>{
        console.log(email,password)
        const body = {
            email: email,
            password: password
        }
        axios.post(`${BASE_URL}login`,body)
        .then((resp)=>{
            console.log('deu certo:',resp.data)
            localStorage.setItem('token',resp.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((err)=>{
            console.log('deu errado:',err)
        })
    }

    return(
        <div>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <form>
                    <input 
                    placeholder="E-mail" 
                    type='text'
                    onChange={onChangeEmail}
                    value={email}
                    />
                    <input 
                    placeholder="Senha" 
                    type='password'
                    onChange={onChangePassword}
                    value={password}
                    />
                </form>
                <div>
                    <button onClick={()=> goToHomePage(navigate)}>Voltar</button>
                    <button onClick={onSubmitLogin}>Entrar</button>
                </div>
            </div>
        </div>
    )
}