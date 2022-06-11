import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";
import {GetUserById,EditUser} from './function'

const app = express();
app.use(express.json());
app.use(cors());

//Create
app.post('/user', async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body
    if (!name || !nickname || !email) {
      res.statusCode = 422
      throw new Error("Missing information, please check your infos")
    }
    await connection("TodoListUser")
      .insert({
        id: Date.now().toString(),
        name: name,
        nickname: nickname,
        email: email
      })
      .into("TodoListUser")
   
    res.status(200).send({ message: "User created" })
  } catch (err: any) {
    res.send(err.message)
  }
})
//Read
app.get('/user/:id',async (req: Request, res: Response) => {
  try{
    const id = req.params.id
    const user = await GetUserById(id)
    if(!user){
      res.statusCode = 400
      throw new Error("User not found")
    }
    res.status(200).send({user: user})
  }catch(err:any){
    res.send({message: err.message})
  }
})
//Update
app.put('/user/edit/:id',async (req: Request, res: Response) => {
  try{
    const {name,nickname,id} = req.body
    if(!name || !nickname){
      res.statusCode = 422
      throw new Error("Missing information, please check your infos")
    }
    await connection("TodoListUser")
    .update({
        name: name,
        nickname: nickname
    })
    .where("id",id)
    res.status(200).send({message: "User Update"})

  }catch(err:any){
    res.send({message: err.message})
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