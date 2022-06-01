import express, { Request, Response } from 'express'
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())

//exercicio1
app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send({ message: 'pong 🏓' })
})
//exercicio2
enum status {
    DONE = "done",
    ONGOING = "ongoing",
    NOTDONE = "notdone"
}
type Tarefa = {
    id: string | number,
    userId: string | number,
    title: string,
    completed: status
}
//exercicio3
let tarefas: Tarefa[] = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: status.DONE
    },
    {
        userId: 2,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: status.NOTDONE
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: status.ONGOING
    },
    {
        userId: 3,
        id: 4,
        title: "et porro tempora",
        completed: status.ONGOING
    },
]
//exercicio4
app.get("/tarefas/search", (req: Request, res: Response) => {
    const query = req.query.status

    if (!query) {
        return res.status(400).send({ message: "Error - verificar seu status" })
    }

    const tarefasStatus = tarefas.filter((t) => {
        return t.completed.toLowerCase() === String(query).toLowerCase()
    })
    type MapTarefas = {
        title: string,
        userId: string | number,
        completed: status
    }
    const tarefasStatusMap: MapTarefas[] = tarefasStatus.map((t) => {
        return {
            title: t.title,
            userId: t.userId,
            completed: t.completed
        }
    })
    type Resp = {
        quantity: number,
        list: MapTarefas[]
    }
    const resultado: Resp = {
        quantity: tarefasStatus.length,
        list: tarefasStatusMap
    }
    return res.status(200).send(resultado)
})
//exercicio5
app.post('/tarefas', (req: Request, res: Response) => {
    const novaTarefa: Tarefa = {
        userId: String(req.headers.authorization),
        id: tarefas.length + 1,
        title: req.body.title,
        completed: status.NOTDONE
    }
    tarefas.push(novaTarefa)
    return res.status(200).send(tarefas)
})
//exercicio6
app.put('/tarefas/change-status/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id)

    for (const tarefa of tarefas) {
        if (id === tarefa.id) {
            if (tarefa.completed === "done") {
                tarefa.completed = status.NOTDONE
                return res.status(200).send({ message: "Status mudado com sucesso", tarefas })
            } else if (tarefa.completed === "notdone") {
                tarefa.completed = status.ONGOING
                return res.status(200).send({ message: "Status mudado com sucesso", tarefas })
            } else if (tarefa.completed === "ongoing") {
                tarefa.completed = status.DONE
                return res.status(200).send({ message: "Status mudado com sucesso", tarefas })
            }
        }
    }
    return res.status(400).send({ message: "Tarefa nao encontrada" })

})
//exercicio7
app.delete('/tarefas/:id', (req: Request, res: Response) => {

    if (tarefas.length>0) {
        for (const tarefa of tarefas) {
            if (Number(req.params.id) === tarefa.id) {
                const indexOf = tarefas.findIndex((t) => {
                    return Number(req.params.id) === t.id
                })
                tarefas.splice(indexOf, 1)
                return res.status(200).send({ tarefas, message: "Tarefa deletada com sucesso" })
            }
            return res.status(400).send({ message: "Tarefa não encontrada" })
        }
    } else {
        return res.send({ message: "Não existe tarefas" })
    }


})
//exercicio8
app.get('/tarefas/:userId', (req: Request, res: Response) => {
    type Resp = {
        todos: {
            selectedUser: Tarefa[],
            others: Tarefa[]
        },
    }

    if (tarefas.length>0) {
        for (const tarefa of tarefas) {
            if (Number(req.params.userId) === tarefa.userId) {
                const tarefasFiltradas = tarefas.filter((t) => {
                    return t.userId === Number(req.params.userId)
                })
                const tarefasRestantes = tarefas.filter((t) => {
                    return t.userId !== Number(req.params.userId)
                })
                const data: Resp = {
                    todos: {
                        selectedUser: tarefasFiltradas,
                        others: tarefasRestantes
                    }
                }
                return res.status(200).send(data)
            } 
            
        }
        return res.status(400).send({ message: "Usuario nao encontrado" })
    } else {
        return res.send({ message: "Não existe tarefas" })
    }

})
//exercici9 => https://documenter.getpostman.com/view/20351383/Uz5DrHrx
app.listen(3003, () => {
    console.log("o servidor esta rodando em http://localhost:3003")
})