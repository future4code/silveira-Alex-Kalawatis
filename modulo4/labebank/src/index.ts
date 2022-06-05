import express, { Request, Response } from 'express'
import cors from 'cors'




const app = express()

app.use(cors())
app.use(express.json())
type Statament = {
    value: number,
    date: number | string,
    description: string
}
type Account = {
    name: string,
    cpf: number | string,
    birthDate: string,
    statament: Statament[]
}
let users: Account[] = [
    {
        name: "Alex",
        cpf: 12345678912,
        birthDate: "29/02/1996",
        statament: [
            {
                value: 2000,
                date: "03/06/2022",
                description: "Deposito bancario"
            }
        ]
    }
]
const verificaIdade = function (ano: number, mes: number, dia: number) {
    let data = new Date
    const anoAtual = data.getFullYear()
    const mesAtual = data.getMonth() + 1
    const diaAtual = data.getDate()

    ano = + ano
    mes = + mes
    dia = +dia

    let qtd_anos = anoAtual - ano
    if (mesAtual < mes || mesAtual === mes && diaAtual < dia) {
        qtd_anos--
    }
    return qtd_anos < 0 ? 0 : qtd_anos
}


app.post('/users', (req: Request, res: Response) => {

    try {
        const { name, cpf, birthDate } = req.body
        const newAccount: Account = {
            name: name,
            cpf: cpf,
            birthDate: birthDate,
            statament: []
        }
        if (!name || !cpf || !birthDate) {
            res.statusCode = 422
            throw new Error("Please check your entries")
        }

        for (const user of users) {
            if (user.cpf === cpf) {
                res.statusCode = 400
                throw new Error("CPF already exists !!")
            }
        }
        const arrBirth = birthDate.split('/')
        const age = verificaIdade(Number(arrBirth[2]), Number(arrBirth[1]), Number(arrBirth[0]))
        if (age < 18) {
            res.statusCode = 400
            throw new Error("You are under age")
        }
        users.push(newAccount)
        res.status(200).send({ message: "Conta criada com sucesso", users })


    } catch (err: any) {
        res.send(err.message)
    }


})
app.get('/users',(req: Request, res: Response)=>{

    try{
        if(users.length === 0){
            res.statusCode = 400
            throw new Error("Nao existem usuarios")
        }
        res.status(200).send(users)
    }catch(err:any){
        res.send(err.message)
    }
    
})


app.listen(3003, () => {
    console.log("o servidor esta rodando em http://localhost:3003")
})