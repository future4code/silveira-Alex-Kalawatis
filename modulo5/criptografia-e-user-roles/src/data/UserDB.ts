import { BaseDatabase } from "./BaseDatabase";

export class UserDB extends BaseDatabase {
    public async createUser(id: string, email: string, password: string, role:string) {
        await BaseDatabase.connection("User")
            .insert({
                id,
                email,
                password,
                role
            }).into("User")
    }
    public async getUserByEmail(email: string) {
        const result = await BaseDatabase.connection("User")
            .select("*")
            .from("User")
            .where({ email })
        return result[0];
    }
    public async getUserById(id: string): Promise<any> {
        const result = await BaseDatabase.connection("User")
            .select("*")
            .from("User")
            .where({ id })
        return result[0];
    }
}