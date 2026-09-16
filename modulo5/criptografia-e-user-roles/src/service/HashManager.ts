import {compareSync, genSaltSync, hashSync} from "bcryptjs"

export default class HashManager {
    createHash = async (plainText:string):Promise<string> =>{
        const cost = 12
        const salt:string = genSaltSync(cost)
        const cypherText: string = hashSync(plainText,salt)

        return cypherText;
    }
    compareHash = async (plainText: string, cypherText: string):Promise<boolean> => {
        return compareSync(plainText, cypherText)
    }
}