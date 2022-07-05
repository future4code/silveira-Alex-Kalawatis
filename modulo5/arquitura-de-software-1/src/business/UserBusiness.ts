import { generateToken, getTokenData } from "../services/authenticator";
import { hash, compare } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { userInput, userLogin } from "../types/user";
import UserData from '../data/UserData'


class UserBusiness {

    // metodo da classe
    async signUp(user: userInput) {

        const { name, email, password, role } = user

        // 1 regra de negocio - validar os valores 
        if (
            !name ||
            !email ||
            !password ||
            !role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        // 2 regra de negocio - gerar meu id 
        const id: string = generateId()

        // 3 regra de negocio - fazer o hash da senha
        const cypherPassword = await hash(password);


        // 4 regra de negocio - inserir os valores no banco de dados
        const userData = new UserData()

        await userData.insertUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })

        // 5 regra de negocio - gerar o token
        const token: string = generateToken({
            id,
            role: role
        })

        return token

    }

    // metodo da classe
    async login(user: userLogin) {

        const { email, password } = user
        const userData = new UserData()
        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email invalido")
        }
        if (!password || password.length < 6) {
            throw new Error("Senha invalida")
        }
        const userFromDB = await userData.getUserByEmail(email)

        const hashCompare = await compare(password, userFromDB.password)
        if (!hashCompare) {
            throw new Error("Senha invalida")
        }
        const token = generateToken({ id: userFromDB.id, role: userFromDB.role })

        return token
    }
    async getAll(token: string) {
        const userData = new UserData()
        getTokenData(token)
        return await userData.getAll()
    }
    async deleteUser(input: {id:string, token:string}){
        const verifyToken = getTokenData(input.token)
        const userData = new UserData()

        if(verifyToken.role !== "ADMIN"){
            throw new Error("Apenas administradores podem deletar usuarios.")
        }
        return await userData.deleteUser(input.id)
    }
}

export default UserBusiness