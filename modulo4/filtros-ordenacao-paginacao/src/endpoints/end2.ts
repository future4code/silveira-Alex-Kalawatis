import { Request, Response } from "express"
import connection from "../data/connection"
import { user } from '../types'

const selectUsersOrder = async (type:string,sort:string,order:string): Promise<any> => {
    const result = await connection('aula49_exercicio')
        .select('id', 'name', 'email', 'type').from('aula49_exercicio').where('type','LIKE',`${type}`).orderBy(sort,order)
    return result
}
const getUsersOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.query.type as string
        let order = req.query.order as string
        let sort = req.query.sort as string

        const users = await selectUsersOrder(type,sort,order)

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
export default getUsersOrder