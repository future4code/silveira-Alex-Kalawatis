import { Request,Response } from "express";
import { getSystemErrorMap } from "util";
import { UserDB } from "../data/UserDB";
import { User } from "../model/User";
import Authenticator from "../service/Authenticator";
import HashManager from "../service/HashManager";
import { IdGenerator } from "../service/idGenerator";

const createUser =async (req:Request,res:Response) => {
    try {
        const idGenerator = new IdGenerator()
        const authenticator = new Authenticator()
        const {name,email,password,role} = req.body
        const id = idGenerator.generateId()
        const userDB = new UserDB()

        if(!email || email.indexOf("@") === -1){
            throw new Error("Invalid email")
        }
        if(!password || password.length<6){
            throw new Error("Invalid password")
        }
        if(!name || !email || !password || !role){
            throw new Error("Please check your information, name, email, password and role are required")
        }
        const user = await userDB.getUserByEmail(email)
        if(user){
            throw new Error("Email already registered ")
        }

        const hashPassword = await new HashManager().createHash(password)
        const newUser = new User(id,name,email,hashPassword,role)
        await userDB.createUser(newUser)

        const token = authenticator.generateToken({id,role})

        res.status(201).send({message:"User created sucessfully.", token:token})
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}
export default createUser