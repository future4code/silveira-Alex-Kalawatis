import { Request, Response } from "express"
import connection from "../data/connection"
import { user } from '../types'

const selectUsersByName = async (name: string): Promise<any> => {
    const result = await connection("aula49_exercicio")
        .select('id', 'name', 'email', 'type').from("aula49_exercicio").where('name', 'LIKE', `${name}`)
    return result
}
const getUsersByName = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.name as string

        /* const name = req.params.name */

        const users = await selectUsersByName(name)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No users found")
        }

        res.status(200).send(users)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
const toUser = (input: any): user => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type
    }
}
export default getUsersByName