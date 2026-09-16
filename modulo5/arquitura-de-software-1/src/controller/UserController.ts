import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import {userInput } from "../types/user";

class UserController {

    async signUp(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body

            const newUser: userInput = {
                name,
                email,
                password,
                role
            }

            // instanciar a classe bussines
            const userBussines = new UserBusiness()

            // chamar o metodo de signUp , que esta no bussines e ele retorna um token
            const token = await userBussines.signUp(newUser)

            res.status(201).send({ message: "Usuario criado com sucesso", token })

        } catch (error: any) {
            res.status(500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const {email,password} = req.body
            const loginData = {
                email:email,
                password:password
            }
            const userBusiness = new UserBusiness()

            const token = await userBusiness.login(loginData)

            res.status(200).send({token})
            
        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const userBussines = new UserBusiness()

            const users = await userBussines.getAll(token)

            res.status(200).send(users)
        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
    async deleteUser(req: Request, res: Response){
        try {
            const userBusiness = new UserBusiness()
            const input = {
                id:req.params.id,
                token: req.headers.authorization as string
            }
            await userBusiness.deleteUser(input)

            res.status(200).send({ message: "Usuário apagado com sucesso" })
        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}

export default UserController