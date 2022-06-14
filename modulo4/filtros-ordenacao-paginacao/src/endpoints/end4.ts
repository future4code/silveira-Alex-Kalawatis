import { Request, Response } from "express"
import connection from "../data/connection"
import { user } from '../types'

const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const name = req.query.title
        let sort = req.query.sort as string
        let order = req.query.order as string
        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1
        }
        //verificação antes de fazer o calculo do offset. 
        let size = 2
        let offset = size * (page - 1)

        if (!sort) {
            const users = await connection('aula49_exercicio')
                .select('id', 'name', 'email', 'type')
            res.status(200).send(users)
        }

        if (!order) {
            order = "DESC"
            sort="name"
        }

        const users = await connection('aula49_exercicio')
            .select('id', 'name', 'email', 'type').where('title', 'LIKE', `%${name}%`)
            .orderBy(sort, order)
            .limit(size)
            .offset(offset)

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
export default getUsers