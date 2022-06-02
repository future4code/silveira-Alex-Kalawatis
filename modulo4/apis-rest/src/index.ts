import express, { Response, Request } from 'express'
import cors from 'cors'
import { STATUS_CODES } from 'http'

const app = express()

app.use(cors())
app.use(express.json())
//exercicio2
//a) id: number | string, name:string, email:string, type: type,age: number b) atraves do enum
type User = {
    id: number | string,
    name: string,
    email: string,
    type: type,
    age: number
}
enum type {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: type.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: type.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: type.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: type.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: type.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: type.ADMIN,
        age: 60
    }
]
//exercicio1
//a) Metodo GET b) /users

app.get('/users', (req: Request, res: Response) => {
    try {
        if (!users) {
            res.statusCode = 404
            throw new Error("Users not found")
        }
        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message)
    }
})
app.get('/users/search', (req: Request, res: Response) => {
    try {
        const name = req.query.name as string
        const user: User | undefined = users.find(u => u.name === name)
        if (!user) {
            res.statusCode = 404
            throw new Error("User not found")

        }
        res.status(200).send({ message: 'User Found', user })
    } catch (err: any) {
        res.send(err.message)
    }
})
//exercicio4
//a) Nao mudou nada ainda continua criando usuarios. b) Não, pois ele é um metodo especifico para mudar as informacoes do banco de dados.
app.post('/users', (req: Request, res: Response) => {
    try {
        const { name, email, type, age }: User = req.body
        const newUser: User = {
            id: users.length + 1,
            name: name,
            email: email,
            type: type,
            age: age
        }
        if (!name || !email || !type || !age) {
            res.statusCode = 422
            throw new Error("Please check ur fields")
        }
        users.push(newUser)
        res.status(200).send({message:"User created sucessefully",users})

    } catch(err:any) {
        res.send(err.message)

    }
})


app.listen(3003, () => {
    console.log("servidor esta rondando em http://localhost:3003")
})