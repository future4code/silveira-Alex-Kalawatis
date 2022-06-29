import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { USER_ROLE } from '../model/User'

export interface AuthenticationData{
    id:string,
    role: USER_ROLE
} 
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
                expiresIn: process.env.EXPIRESIN as string
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