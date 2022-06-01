import express, { Request, Response } from 'express'
import cors from 'cors'
import { products, makeid } from './data'

const app = express()

app.use(cors())
app.use(express.json())

//exercicio1
app.get('/test', (req: Request, res: Response) => {
    res.status(200).send({ message: "API funcionando 💯" })
})
//exercicio 3 & 7
app.post('/product', (req: Request, res: Response) => {
    try {
        const newProduct = {
            id: makeid(10),
            name: req.body.name,
            price: req.body.price
        }
        if(!req.body.name){
            res.statusCode = 422
            throw new Error("Nome do produto nao foi enviado")
        }else if(!req.body.price){
            res.statusCode = 422
            throw new Error("Preço do produto nao foi enviado")
        }else if(!req.body.price && !req.body.name){
            res.statusCode = 422
            throw new Error("Nome e preço do produto nao foram enviados")
        }
        if(typeof req.body.name !== "string"){
            res.statusCode = 400
            throw new Error("Nome do produto dever ser um texto")
        }
        if(typeof req.body.price !== "number"){
            res.statusCode = 400
            throw new Error("Preço do produto deve ser um numero")
        }
        if(req.body.price<0){
            res.statusCode = 422
            throw new Error("Preço do produto deve ser um numero positivo")
        }

        products.push(newProduct)
        return res.status(200).send({ message: "Produto Criado com sucesso", products })
    } catch (err:any) {
        res.send(err.message)
    }

})
//exercicio4
app.get('/product', (req: Request, res: Response) => {

    return res.status(200).send(products)
})
//exercicio5
app.put('/product/:id', (req: Request, res: Response) => {
    const id = req.params.id
    for (const product of products) {
        if (id === product.id) {
            product.price = req.body.price
            return res.status(200).send(products)
        }
    }
})
//exercicio6
app.delete('/product/:id', (req: Request, res: Response) => {
    if (products) {
        for (const product of products) {
            if (product.id === req.params.id) {
                const indexOf = products.findIndex((p) => {
                    return req.params.id === p.id
                })
                products.splice(indexOf, 1)
                return res.status(200).send(products)
            }
        }
    }
})

app.listen(3003, () => {
    console.log("sevidor rodando em http://localhost:3003")
})
