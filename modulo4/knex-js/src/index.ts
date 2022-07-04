import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { connection } from "./connection"

const app = express()

app.use(cors())
app.use(express.json())

//exercicio1

//a) A resposta vem como uma matriz de uma linha e duas colonas onde a primeira colona esta as informacoes da tabela.
//b)

// const getActorByName =async (name:string): Promise<any> => {
//     const result = await connection.raw(`
//         SELECT * FROM Actor WHERE name = '${name}'
//     `)
//     return result[0]

// }
// (async () => {
//     console.log(await getActorByName("Tony Ramos"))
// })()

//c)
const countByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)
    return result[0][0].count
}
/* (async () => {
    console.log(await countByGender("male"))
})()
 */
//exercicio2
const createActor = async (id: string,name: string,salary: number,dateOfBirth: Date,gender: string): Promise<void> => {
    await connection("Actor")
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");
};

//a)
const updateSalary = async (id: string, salary: number): Promise<void> => {
    await connection("Actor")
        .update({
            salary: salary
        })
        .where("id", id)
}
//b)c
const deleteById = async (id: string): Promise<void> => {
    await connection("Actor")
        .delete()
        .where("id", id)
}
//c
const avgByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
        .avg("Salary as avg")
        .where({ gender })
    return result[0].avg
}
/*  (async () => {
   console.log(await avgByGender("female"))
})() */
//exercicio3
//a)
const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    return result[0][0]
}

app.get('/actors/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)
        if (!actor) {
            res.statusCode = 400
            throw new Error("Nao existe ator com esse id")
        }

        res.status(200).send(actor)
    } catch (err: any) {
        res.send(err.message)
    }
})
//b)
app.get('/actors', async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string
        const count = await countByGender(gender)
        if (!count) {
            res.statusCode = 500
            throw new Error("Unexpected Error")
        }
        res.status(200).send({ qtd: count })

    } catch (err: any) {
        res.send({ message: err.message })
    }
})
//exercicio 4
app.post("/actor", async (req: Request, res: Response) => {
    try {
        const {id,name,salary,dateOfBirth,gender} = req.body
        createActor(id,name,salary,new Date(dateOfBirth),gender);

        res.status(200).send("usuario criado com sucesso");
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
});
//a
app.put('/actors', async (req: Request, res: Response) => {
    try {
        const { id, salary } = req.body
        await updateSalary(id,salary)

        res.status(200).send("salario atualizado")

    } catch (err: any) {
        res.send(err.message)
    }
})
//b)
app.delete('/actors/:id',async (req: Request, res: Response) =>{
    try{
        const id = req.params.id
        await deleteById(id)

        res.status(200).send("usuario deletado com sucesso")

    }catch(err:any){
        res.send(err.message)
    }
})
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
