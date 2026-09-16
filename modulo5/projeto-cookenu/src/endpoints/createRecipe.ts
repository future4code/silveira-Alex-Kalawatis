import { Request, Response } from 'express'
import { RecipeDB } from '../data/RecipeDB'
import { Recipe } from '../model/Recipe'
import Authenticator from '../service/Authenticator'
import { IdGenerator } from '../service/idGenerator'
import moment from 'moment'

const createRecipe = async (req: Request, res: Response) => {
    try {
        //token para verificar se user ta logado
        const token = req.headers.authorization
        //id generator para gerar um novo id para receita
        const idGenerator = new IdGenerator()
        const { title, description} = req.body
        const id = idGenerator.generateId()
        const recipeDb = new RecipeDB()
        //data de criação da receita + formatação
       
        const created_at = new Date()
        console.log(created_at)

        
        if (!token) {
            res.statusCode = 401
            throw new Error("Please check your headers, you need an authorization")
        }
        if (!title || !description || !created_at) {
            res.statusCode = 422
            throw new Error("Please check your recipe information")
        }
        //com o token do usuario utilizo o authenticator para pegar o id do usuario e inserir na tabela relacional 1:N de receitas, onde um usuario pode inserir varias receitas.
        const authenticationData = new Authenticator().getData(token)
       
        const newRecipe = new Recipe(id, title, description, created_at, authenticationData.id)
        await recipeDb.createRecipe(newRecipe)
        console.log(newRecipe.getDate().toLocaleDateString('pt-br'))

        res.status(201).send({ message: "Recipe registered sucessfully." })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}
export default createRecipe;