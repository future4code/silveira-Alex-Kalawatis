import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDB extends BaseDatabase {
    public async createUser(user: User) {
        try {
            await BaseDatabase.connection("cookenu_users")
                .insert({
                    id: user.getId(),
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                }).into("cookenu_users")
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async getUserByEmail(email: string): Promise<User | undefined> {
        try {
            const result = await BaseDatabase.connection("cookenu_users")
                .select("*")
                .from("cookenu_users")
                .where({ email })
            return result[0] && User.toUserModel(result[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async getUserById(id: string): Promise<User> {
        try {
            const result = await BaseDatabase.connection("cookenu_users")
                .select("*")
                .from("cookenu_users")
                .where({ id })
            return result[0] && User.toUserModel(result[0]);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}