import app from './app'
import getUsersByName from './endpoints/getUsersByName'
import getUsersOrder from "./endpoints/end2"
import getUsersLimit from './endpoints/end3'

app.get('/user',getUsersLimit)
/* app.get('/users',getUsersOrder) */
