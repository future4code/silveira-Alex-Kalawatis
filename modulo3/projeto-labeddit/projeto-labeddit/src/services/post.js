import { baseURL } from "../constants/urls"
import axios from "axios"
import { goToFeedPage } from "../routes/coordinator"

export const signUp = (body, navigate) => {
    axios.post(`${baseURL}/users/singup`, body)
        .then((resp) => {
            console.log('deu certo', resp)
            localStorage.setItem('token', resp.data.token)
            goToFeedPage(navigate)
        })
        .catch((err) => {
            console.log("deu errado", err)
        })
}

export const login = (body, navigate) => {

    axios.post(`${baseURL}/users/login`, body)
        .then((resp) => {
            console.log('deu certo', resp)
            localStorage.setItem('token', resp.data.token)
            goToFeedPage(navigate)
        })
        .catch((err) => {
            console.log("deu errado", err)
        })
}
export const createPost = (body, clear) => {
    const Headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }
    axios.post(`${baseURL}/posts`, body, Headers)
        .then(() => {
            alert("Post criado com sucesso")
            clear()
        })
        .catch((err) => {
            alert("Algo deu errado")
            console.log(err)
        })
}
