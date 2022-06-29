import { Request,Response } from "express";
import { UserDB } from "../data/UserDB";
import Authenticator from "../service/Authenticator";
import HashManager from "../service/HashManager";
import { IdGenerator } from "../service/idGenerator";

const createUser =async (req:Request,res:Response) => {
    try {
        const idGenerator = new IdGenerator()
        const authenticator = new Authenticator()
        const {email,password,role} = req.body
        const id = idGenerator.generateId()

        if(!email || email.indexOf("@") === -1){
            throw new Error("Invalid email")
        }
        if(!password || password.length <6){
            throw new Error("Invalid password")
        }
        const hashPassword = await new HashManager().createHash(password)
        const userDb = new UserDB()
        await userDb.createUser(id,email,hashPassword,role)
        
        const token = authenticator.generateToken({id,role})
        res.status(200).send({token:token})
        
    } catch (error:any) {
        res.status(400).send({message:error.message})
    }
}
export default createUser