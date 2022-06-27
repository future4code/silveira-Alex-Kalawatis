import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import Authenticator from "../service/Authenticator";

const getUserById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const authenticationData = new Authenticator().getData(token)
        const userDb = new UserDB()

        const user = await userDb.getUserById(authenticationData.id)

        res.status(200).send({ id: user.id, email: user.email })

    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
}
export default getUserById;