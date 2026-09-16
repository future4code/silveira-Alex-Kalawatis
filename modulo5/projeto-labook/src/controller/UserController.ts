import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { loginInputDTO } from "../types/loginInputDTO";
import { signupInputDTO } from "../types/signupInputDTO";

export default class UserController {
    
    constructor(
        private userBusiness: UserBusiness
    ) {}

    signup = async (req: Request, res: Response): Promise<void> => {

        try {
            const { name, email, password } = req.body;

            const input: signupInputDTO = {
                name,
                email,
                password
            }
            
            const token = await this.userBusiness.signup(input)
            res.status(201).send({ message: "Usuario Cadastrado com sucesso", token})
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
    login = async (req: Request, res: Response):Promise<void> => {
        const { email, password } = req.body
        const input: loginInputDTO = {
            email,
            password
        }

        try {
            
            const token = await this.userBusiness.login(input)

            res.status(200).send({ token })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}