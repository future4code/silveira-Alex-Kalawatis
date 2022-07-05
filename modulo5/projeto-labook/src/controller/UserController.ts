import { Request,Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { signupInputDTO } from "../types/signupInputDTO";

export default class UserController {
    constructor(
        private userBusiness:UserBusiness
    ){}

    async signup (req:Request,res:Response){
        const {name,email,password} =  req.body;

        const input : signupInputDTO = {
            name,
            email,
            password
        } 
        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({message: "Usuario Cadastrado com sucesso", token})
        } catch (error:any) {
            
        }
    }
}