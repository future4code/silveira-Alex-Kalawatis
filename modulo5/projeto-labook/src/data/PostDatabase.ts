import Post from "../model/Post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    protected TABLE_NAME = 'labook_posts'
    insertPost = async (post:Post) =>{
        try {
            await BaseDatabase.connection(this.TABLE_NAME).insert(post)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    findPostById = async (id:string) =>{
        try {
            const result = await BaseDatabase
            .connection(this.TABLE_NAME)
            .select("*")
            .where({id})

            return result[0]
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}