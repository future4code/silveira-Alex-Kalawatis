
import { BaseDatabase } from "./BaseDatabase"
import { user, userInput } from "../types/user"

class UserData extends BaseDatabase {

   async insertUser(user: user) {
      try {
         await BaseDatabase.connection('User_Arq').insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
         }).into('User_Arq')
      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   async getUserByEmail(email:string):Promise<any> {
      try {
         const result = await BaseDatabase.connection()
         .select("*")
         .from("User_Arq")
         .where({email})
         if(!result[0]){
            throw new Error("Usuario nao encontrado.")
         }
         return result[0];
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   async getAll():Promise<any>{
      try {
         const users:any = []
         const result = await BaseDatabase.connection("User_Aqr")
         .select("*")
         .from("User_Arq")
         for(let user of result){
            users.push(user)
         }
         return users
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
   async deleteUser(id:string):Promise<void>{
      try {
         await BaseDatabase.connection("User_Arq")
         .where({id})
         .from("User_Arq")
         .del()
      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
}

export default UserData