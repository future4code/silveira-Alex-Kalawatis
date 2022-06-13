import { baseURL } from "../constants/urls"
import axios from "axios"
import { goToFeedPage } from "../routes/coordinator"

export const signUp = (body, navigate,clear) => {
    axios.post(`https://labeddit.herokuapp.com/users/signup`, body)
        .then((resp) => {
            console.log('deu certo', resp)
            localStorage.setItem('token', resp.data.token)
            goToFeedPage(navigate)
            clear()
        })
        .catch((err) => {
            console.log("deu errado", err.message)
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
            Authorization: localStorage.getItem('token')
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
export const createComment = (body,id,clear,getData) =>{
    const Headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    axios.post(`${baseURL}/posts/${id}/comments`,body,Headers)
    .then(()=>{
        alert("Comentario postado")
        getData()
        clear()
    })
    .catch((err)=>{
        console.log(err)
    })
}
