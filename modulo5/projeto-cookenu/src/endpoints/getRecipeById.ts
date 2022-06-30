import { Request, Response } from "express";
import moment from "moment";
import { RecipeDB } from "../data/RecipeDB";
import Authenticator from "../service/Authenticator";

export interface RecipeBody{
    id:string,
    title:string,
    description: string,
    created_at: string
}

const getRecipeById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const id = req.params.id
        const authenticationData = new Authenticator().getData(token)
        const recipeDb = new RecipeDB()
        
        if(!token){
            res.statusCode = 422
            throw new Error("Please check your headers, you need an authorization")
        }
        if(!authenticationData){
            res.statusCode = 401
            throw new Error("Unauthorized")
        }
        
        const recipe = await recipeDb.getRecipeById(id)
        console.log(recipe)
        const recipeBody:RecipeBody = {id:recipe.getId(),title:recipe.getTitle(),description:recipe.getDescription(),created_at:recipe.getDate().toLocaleDateString('pt-br')}
        

        res.status(200).send({recipe:recipeBody})
       

    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
}
export default getRecipeById;