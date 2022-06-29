import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import Authenticator from "../service/Authenticator";

const getUserById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const authenticationData = new Authenticator().getData(token)
        const userDb = new UserDB()
        if(authenticationData.role.toLocaleLowerCase() !== "normal"){
            throw new Error("Only a normal user can acess this funcionality")
        }
        const user = await userDb.getUserById(authenticationData.id)

        res.status(200).send({ id: user.id, email: user.email, role:user.role })

    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
}
export default getUserById;