import { perfomPurchase, User, verifyAge } from "../src"
import { Casino, Client, LOCATION, NACIONALITY } from "../src/types/exercicio3"
//Exercicio2
describe("testes do segundo exercicio",()=>{
    test("testando a função performPurchase, saldo do usuario maior que o valor da compra ",()=>{
        const user:User = {
            name: "Alex",
            balance: 100
        }
        const result = perfomPurchase(user,50)
        expect(result).toEqual({
            name:"Alex",
            balance: 50
        })
    })
    test("testando a função performPurchase, saldo do usuario igual ao valor da compra",()=>{
        const user:User = {
            name: "Alex",
            balance: 100
        }
        const result = perfomPurchase(user,100)
        expect(result).toEqual({
            name: "Alex",
            balance: 0
        })
    })
    test("testando a função performPurchase, saldo do usuario menor que o valor da compra",()=>{
        const user:User = {
            name: "Alex",
            balance: 30
        }
        const result = perfomPurchase(user,50)
        expect(result).toBeUndefined()
    })

})
//Exercicio4
describe("teste do exercicio 4",()=>{
    test("testando um usuario BR que possa entrar no casino no BR",()=>{
        const client:Client = {
            name:"Alex",
            age: 26,
            nacionality: NACIONALITY.BRAZILIAN
        }
        
        const casino:Casino ={
            name: "Casino da Urca",
            location: LOCATION.BRAZIL
        }
        const result = verifyAge(casino,[client])
        expect(result.brazilians.allowed).toContainEqual(["Alex"])
    })
})