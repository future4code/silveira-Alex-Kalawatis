import {compareSync, genSaltSync, hashSync} from "bcryptjs"
import dotenv from "dotenv"

dotenv.config()

export default class HashManager {
    createHash = async (plainText:string):Promise<string> =>{
        const cost = Number(process.env.BCRYPT_COST)
        const salt:string = genSaltSync(cost)
        const cypherText: string = hashSync(plainText,salt)

        return cypherText;
    }
    compareHash = async (plainText: string, cypherText: string):Promise<boolean> => {
        return compareSync(plainText, cypherText)
    }
}