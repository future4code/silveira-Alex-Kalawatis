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

app.post('/user/signup', userController.signup)