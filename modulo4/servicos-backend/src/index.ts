import app from './app'
import { postAddress } from './endpoint/postAdress'

app.post("/address/:cep",postAddress)