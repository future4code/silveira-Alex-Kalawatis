import { Request, Response } from "express"
import connection from "../data/connection"
import { user } from '../types'

const selectUsersOrder = async (size: number,offset:number): Promise<any> => {
    const result = await connection('aula49_exercicio')
        .select('id', 'name', 'email', 'type').from('aula49_exercicio').limit(size).offset(offset)
    return result
}
const getUsersLimit = async (req: Request, res: Response): Promise<void> => {
    try {

        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1
        }
        let size = 5
        let offset = size * (page - 1)
        
        const users = await selectUsersOrder(size,offset)

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
export default getUsersLimit