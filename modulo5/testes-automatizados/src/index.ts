//Exercicio1

import { userInfo } from "os";
import { Casino, Client, LOCATION, NACIONALITY, Result } from "./types/exercicio3";


//a)
export interface User {
    name: string,
    balance: number
}
//b)
export const perfomPurchase = (user: User, value: number): User | undefined => {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        };
    }
    return undefined;
}
//Exercicio 3
//b)
export const verifyAge = (casino: Casino, clients: Client[]): Result => {
    const allowed: Client[] = []
    const unallowed: Client[] = []

    for (const client of clients) {
        if (casino.location === LOCATION.BRAZIL) {
            if (client.age >= 18) {
                allowed.push(client)
            } else {
                unallowed.push(client)
            }
        } else if (casino.location === LOCATION.EUA) {
            if (client.age >= 21) {
                allowed.push(client)
            } else {
                unallowed.push(client)
            }
        }
    }
    const result: Result = {
        brazilians: {
            allowed: allowed.filter((client) => {
                client.nacionality === NACIONALITY.BRAZILIAN
            }).map((c) => {
                return c.name
            }),
            unallowed: unallowed.filter((client) => {
                client.nacionality === NACIONALITY.BRAZILIAN
            }).map((c) => {
                return c.name
            })
        },
        americans: {
            allowed: allowed.filter((client) => {
                client.nacionality === NACIONALITY.AMERICAN
            }).map((c) => {
                return c.name
            }),
            unallowed: unallowed.filter((client) => {
                client.nacionality === NACIONALITY.AMERICAN
            }).map((c) => {
                return c.name
            })
        }

    }

    return result;
}   