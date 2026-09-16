import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDB extends BaseDatabase {
    public async createRecipe(recipe: Recipe) {
        try {
            await BaseDatabase.connection("cookenu_recipes")
                .insert({
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    created_at: recipe.getDate(),
                    user_id: recipe.getUserId()
                }).into("cookenu_recipes")
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async getRecipeById(id:string): Promise<Recipe> {
        try {
            const result = await BaseDatabase.connection("cookenu_recipes")
                .select("*")
                .from("cookenu_recipes")
                .where({ id })
            return result[0] && Recipe.toRecipeModel(result[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}