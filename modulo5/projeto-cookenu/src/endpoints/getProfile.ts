import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import { USER_ROLE } from "../model/User";
import Authenticator from "../service/Authenticator";

export interface UserProfile {
    name:string,
    role: USER_ROLE
}

const getProfile =async (req:Request, res : Response) => {
    try {
        const token = req.headers.authorization
        if(!token){
           res.statusCode = 422
           throw new Error("Please check your headers, you need an authorization")
        }
        const authenticationData = new Authenticator().getData(token)
        if(!authenticationData){
            res.statusCode = 401
            throw new Error("Unauthorized")
        }
        const userDb = new UserDB()
        
        const user = await userDb.getUserById(authenticationData.id)
        const profile:UserProfile = {name:user.getName(), role:user.getRole()}

        res.status(200).send({UserProfile:profile})
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}

export default getProfile;