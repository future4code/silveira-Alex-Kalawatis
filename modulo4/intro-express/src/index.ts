import express, { Request, Response } from 'express';
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
//exercicio1
app.get('/teste', (request: Request, response: Response) => {
    response.status(200).send({ message: "Meu primeiro endpoint" })

})
//exercicio2
type User = {
    id: string | number,
    name: string,
    phone: string | number,
    email: string,
    website: string
}
//exercicio3
const listaUsers: User[] = [
    {
        id: 1,
        name: 'Alex',
        phone: "33224455",
        email: "alex@gmail.com",
        website: "alex.io"
    },
    {
        id: 2,
        name: 'Leanne Graham',
        phone: "1-770-736-8031 x56442",
        email: "Sincere@april.biz",
        website: "hildegard.org"
    },
    {
        id: 3,
        name: "Ervin Howell",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net"
    },
    {
        id: 4,
        name: "Clementine Bauch",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info"
    },
    {
        id: 5,
        name: "Patricia Lebsack",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz"
    }
]
//exercicio4
app.get('/users', (request: Request, response: Response) => {
    response.status(200).send(listaUsers)
})
//exercicio5
type post = {
    id: string | number,
    title: string,
    body: string,
    userId: string | number
}
//exercicio6 Depende, criando dentro do array é trabalhoso mas se for poucos dados da para fazer, porem é melhor automatizar o processo e criar um endpoint para receber essas informações e guardar no array.
let posts: post[] = [

        {
          userId: 1,
          id: 1,
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          userId: 2,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          userId: 1,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          userId: 5,
          id: 4,
          title: "eum et est occaecati",
          body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          userId:2,
          id: 5,
          title: "nesciunt quas odio",
          body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          userId: 3,
          id: 6,
          title: "dolorem eum magni eos aperiam quia",
          body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        }
]
//exercicio7
app.get('/post', (request: Request, response: Response) => {
    response.status(200).send(posts)
})
//exercicio8
app.get("/post/:userId",(request: Request, response: Response)=>{
    const postFiltered = posts.filter((p)=>{
        return Number(request.params.userId) === p.userId
    })
    response.status(200).send(postFiltered)
})
//exercicio9
app.delete("/post/:id",(request: Request, response: Response)=>{
    const indexOf = posts.findIndex((p)=>{
        return Number(request.params.id) === p.id
    })
    posts.splice(indexOf,1)
    response.status(200).send({posts,message:"Post deletado com sucesso"})
})
app.delete("/users/:id",(request: Request, response: Response)=>{
    const indexOf = listaUsers.findIndex((u)=>{
        return u.id === Number(request.params.id)
    })
    listaUsers.splice(indexOf,1)
    response.status(200).send({listaUsers,message:"Usuario deletado com sucesso"})
})
app.listen(3003, () => {
    console.log('O servidor esta rodando em http://localhost:3003')
})

