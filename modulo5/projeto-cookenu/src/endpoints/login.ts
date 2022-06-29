import { Request,Response } from "express";
import { UserDB } from "../data/UserDB";
import { User } from "../model/User";
import Authenticator from "../service/Authenticator";
import HashManager from "../service/HashManager";


const login =async (req:Request,res:Response) => {
    try {
        const authenticator = new Authenticator()
        const {email,password} = req.body
        const userDB = new UserDB()

        if(!email || email.indexOf("@") === -1){
            res.statusCode = 422
            throw new Error("Invalid email")
        }
        if(!password || password.length<6){
            res.statusCode = 422
            throw new Error("Invalid password")
        }
        if( !email || !password ){
            res.statusCode = 422
            throw new Error("Please check your information email, password are required")
        }
        const user = await userDB.getUserByEmail(email)
        if(!user){
            throw new Error("Email is not registered ")
        }

        const hashManager = new HashManager()
        const comparePassword = hashManager.compareHash(password,user.getPassword())

        if(!comparePassword){
            res.statusCode = 401

        }

        const token = authenticator.generateToken({id:user.getId(),role:user.getRole()})

        res.status(201).send({message:"User logged sucessfully.", token:token})
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}
export default login