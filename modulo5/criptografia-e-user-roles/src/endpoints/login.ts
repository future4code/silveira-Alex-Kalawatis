import { Request, Response } from "express";
import { UserDB } from "../data/UserDB";
import Authenticator from "../service/Authenticator";
import HashManager from "../service/HashManager";

const login = async (req: Request, res: Response) => {
    try {
        const authenticator = new Authenticator()
        const userDb = new UserDB()
        const { email, password } = req.body

        if (!email || email.indexOf('@') === -1) {
            throw new Error("Invalid email")
        }
        const user = await userDb.getUserByEmail(email)
        const compareResult = await new HashManager().compareHash(password, user.password)

        if (!compareResult) {
            throw new Error("Invalid Password")
        }

        const token = authenticator.generateToken({ id: user.id, role: user.role })
        res.status(200).send({ token: token })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
export default login;