import { PostBusiness } from './business/PostBusiness'
import UserBusiness from './business/UserBusiness'
import { PostController } from './controller/PostController'
import UserController from './controller/UserController'
import app from './data/app'
import { PostDatabase } from './data/PostDatabase'
import UserData from './data/UserData'
import Authenticator from './services/Authenticator'
import { HashManager } from './services/HashManager'
import { IdGenerator } from './services/IdGenerator'

const userBusiness = new UserBusiness(
    new UserData(),
    new IdGenerator(),
    new Authenticator(),
    new HashManager()
)

const userController = new UserController(userBusiness)
const postBusiness = new PostBusiness(
    new PostDatabase(),
    new IdGenerator(),
    new Authenticator()
)
const postController = new PostController(postBusiness)
//Create
/* User */

app.post('/user/signup', new UserController(userBusiness).signup)
app.post('/user/login',userController.login)
/* Post */
app.post('/post',postController.createPost)
//Read
/* Post */
app.get('/post/:id',postController.findPostById)
//Update

//Delete