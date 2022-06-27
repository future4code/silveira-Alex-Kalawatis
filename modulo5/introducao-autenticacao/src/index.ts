import app from "./app"
import createUser from "./endpoints/createUser"
import getUserById from "./endpoints/getUserById"
import login from "./endpoints/login"


app.post('/user/signup', createUser)
app.post('/user/login',login)
app.get('/user/profile',getUserById)