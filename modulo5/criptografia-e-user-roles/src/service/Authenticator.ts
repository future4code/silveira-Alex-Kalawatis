import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../model/types'
import dotenv from 'dotenv'

dotenv.config()
const expiresIn = "1h"

export default class Authenticator {
    generateToken = (payload: AuthenticationData): string => {
        const token = jwt.sign(
            {
                id: payload.id,
                role: payload.role
            },
            process.env.JWT_KEY as string,
            {
                expiresIn
            }
        )
        return token;
    }

    getData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        };
        return result;
    };
}