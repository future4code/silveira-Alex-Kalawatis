import app from "./app"
import createUser from "./endpoints/createUser"
import getProfile from "./endpoints/getProfile"
import login from "./endpoints/login"

//Create
app.post('/user/signup', createUser)
app.post('/user/login',login)

//Read
app.get('/user/profile',getProfile)

//Update


//Delete