import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types/authData"
import dotenv from 'dotenv'

dotenv.config()


export default class Authenticator {
   generateToken = (payload: authenticationData): string => {
      const token = jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: process.env.EXPIRESIN as string
         }
      )
      return token;
   }

   getTokenData = (token: string): authenticationData => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as authenticationData
   }
}
