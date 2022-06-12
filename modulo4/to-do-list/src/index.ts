import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { createUser, getUserById, editUser, createTask, selectTableUserTask, getAllUsers, selectUser, insertTaskResposible } from './function'

const app = express();
app.use(express.json());
app.use(cors());

//Create
/* user */
app.post('/user', async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body
    if (!name || !nickname || !email) {
      res.statusCode = 422
      throw new Error("Missing information, please check your infos")
    }
    createUser(name, nickname, email)
    res.status(200).send({ message: "User created successfully" })
  } catch (err: any) {
    res.send(err.message)
  }
})
/* task */
app.post('/task', async (req: Request, res: Response) => {
  try {
    const { title, description, limitDate, creatorUserId } = req.body
    if (!title || !description || !limitDate || !creatorUserId) {
      res.statusCode = 422
      throw new Error("Missing information, please check your task info")
    }
    createTask(title, description, limitDate, creatorUserId)
    res.status(200).send({ message: "Task created successfully " })
  } catch (err: any) {
    res.send({ message: err.message })
  }
})
app.post('/task/responsible', async (req: Request, res: Response) => {
  try{
    const {task_id,responsible_user_id} = req.body
    if(!task_id || !responsible_user_id){
      res.statusCode = 422
      throw new Error("Please check the information, something is missing")
    }
    insertTaskResposible(task_id,responsible_user_id)
    if(!insertTaskResposible){
      res.statusCode = 500
      throw new Error("Unexpected Error")
    }
    res.status(200).send({message: "Task successfully assigned"})

  }catch(err:any){
    res.send({message:err.message})
  }
 })
//Read
/* user */
app.get('/user/all', async (req: Request, res: Response) => {
  try {
    const array = await getAllUsers();
    res.status(200).send({ users: array })
  } catch (err: any) {
    res.send({ message: err.message })
  }
})
app.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const user = await getUserById(id)
    if (!user || user.length === 0) {
      res.statusCode = 400
      throw new Error("User not found")
    }
    res.status(200).send({ user: user })
  } catch (err: any) {
    res.send({ message: err.message })
  }
})
app.get('/user', async (req: Request, res: Response) => {
  try {
    const query = req.query.query
    const array = await selectUser()
    const newArray = array.filter((a: any) => {
      return a.nickname === query
    })
    res.status(200).send({ user: newArray })
  } catch (err: any) {
    res.send({ message: err.message })
  }
})
/* task */
app.get('/task/:id', async (req: Request, res: Response) => {
  try {
    const table = await selectTableUserTask()
    if (!table) {
      res.statusCode = 500
      throw new Error("Unexpected Error")
    }
    const newTable = table.filter((t: any) => {
      return t.id === req.params.id
    })
    if (!newTable) {
      res.statusCode = 400
      throw new Error("Task does not exists")
    }
    type Resp = {
      taskId: string,
      title: string,
      description: string,
      limitDate: string,
      status: string,
      creatorUserId: string,
      creatorUserNickname: string
    }
    const resp: Resp = {
      taskId: newTable[0].id,
      title: newTable[0].title,
      description: newTable[0].description,
      limitDate: newTable[0].limit_date.toLocaleDateString('pt-br'),
      status: newTable[0].status,
      creatorUserId: newTable[0].creator_user_id,
      creatorUserNickname: newTable[0].nickname
    }
    res.status(200).send(resp)

  } catch (err: any) {
    res.send({ message: err.message })
  }
})
app.get('/task', async (req: Request, res: Response) => {
  try {
    const query = req.query.creatorUserId as string
    const array = await selectTableUserTask()
    const newArray = array.filter((a: any) => {
      a.limit_date = a.limit_date.toLocaleDateString('pt-br')
      return a.creator_user_id === query
    })
    res.status(200).send({ users: newArray })

  } catch (err: any) {
    res.send({ message: err.message })
  }
})
//Update
app.put('/user/edit/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const { name, nickname } = req.body

    editUser(id, name, nickname)
    res.status(200).send({ message: "User Update" })

  } catch (err: any) {
    res.send({ message: err.message })
  }
})
//Delete




const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app