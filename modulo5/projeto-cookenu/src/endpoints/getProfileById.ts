import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import Authenticator from "../service/Authenticator";
import {UserProfile} from "./getProfile"

const getProfileById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id
        const authenticationData = new Authenticator().getData(token)
        const userDb = new UserDB()
        
        if(!token){
            res.statusCode = 422
            throw new Error("Please check your headers, you need an authorization")
        }
        if(!authenticationData){
            res.statusCode = 401
            throw new Error("Unauthorized")
        }
        
        const user = await userDb.getUserById(id)
        const profile:UserProfile = {id:user.getId(),name:user.getName(),email:user.getEmail()}

        res.status(200).send({user:profile})
       

    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
}
export default getProfileById;