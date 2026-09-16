import UserData from "../data/UserData";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { loginInputDTO } from "../types/loginInputDTO";
import { signupInputDTO } from "../types/signupInputDTO";

export default class UserBusiness {
    constructor(
        private userData : UserData,
        private idGenerator: IdGenerator,
        private authenticator:Authenticator,
        private hashManager: HashManager
    )
    {}
    async signup (input:signupInputDTO){
        //validação
        const {name, email, password} = input

        if(!email || !name || !password){
            throw new Error("Campos inválidos")
        }

        //conferir se usuario existe
        const registeredUser = await this.userData.findByEmail(email)
        if(registeredUser){
            throw new Error("Usuario já cadastrado")
        }
        //criar uma id pro usuario
        const id = this.idGenerator.generateId()
        //hashear password
        const hashedPass = await this.hashManager.hash(password)
        //criar um user no banco
        const user = new User(id,name,email,hashedPass)
        await this.userData.insertUser(user)
        //criar o token
        const token = this.authenticator.generateToken({id})
        //retornar o token
        return token;
    }
    async login(input:loginInputDTO){
        if(!input.email || input.email.indexOf("@")=== -1){
            throw new Error("Email inválido")
        }
        if(!input.password || input.password.length < 6){
            throw new Error("Senha inválida")
        }
        const userFromDB = await this.userData.findByEmail(input.email)
        const hashCompare = await this.hashManager.compare(input.password,userFromDB.password)
        if(!hashCompare){
            throw new Error("Senha inválida")
        }
        const token = this.authenticator.generateToken({id:userFromDB.id})

        return token
    }
}