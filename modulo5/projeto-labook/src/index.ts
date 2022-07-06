import UserBusiness from './business/UserBusiness'
import UserController from './controller/UserController'
import app from './data/app'
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
//Create
/* User */

app.post('/user/signup', new UserController(userBusiness).signup)
app.post('/user/login',userController.login)
/* Post */
//Read

//Update

//Delete