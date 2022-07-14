import User from "../model/User";
import { ResponseFindByEmail } from "../types/ResponseFindByEmail";
import { BaseDatabase } from "./BaseDatabase";

export default class UserData extends BaseDatabase {
    protected TABLE_NAME = 'labook_users'
    async findByEmail(email:string){
        try {
            const result:ResponseFindByEmail = await BaseDatabase.connection(this.TABLE_NAME)
            .select("*")
            .from(this.TABLE_NAME)
            .where({email})
            if(!result){
                throw new Error("Usuario não encontrado")
            }
            return result[0]
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    async insertUser(user:User){
        try {
            
            await BaseDatabase.connection(this.TABLE_NAME).insert(user)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}