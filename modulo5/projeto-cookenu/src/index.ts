import app from "./app"
import createRecipe from "./endpoints/createRecipe"
import createUser from "./endpoints/createUser"
import getProfile from "./endpoints/getProfile"
import login from "./endpoints/login"
import getProfileById from "./endpoints/getProfileById"
import getRecipeById from "./endpoints/getRecipeById"

//Create
/* User */
app.post('/user/signup', createUser)
app.post('/user/login',login)
/* Recipe */
app.post('/recipe',createRecipe)
//Read
/* User */
app.get('/user/profile',getProfile)
app.get('/user/profile/:id',getProfileById)

/* Recipe */
app.get('/recipe/:id',getRecipeById)
//Update


//Delete
