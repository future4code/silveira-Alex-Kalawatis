import axios from 'axios'

//exercicio 1
//a) get
//b)Promise<any[]>

/* async function getSubscribers():Promise<any[]> {
    const resp = await axios.get('https://labenews.herokuapp.com/subscribers')
    return resp.data
} */

//exercicio2
//a)
//b)
/* const getSubscribers= async():Promise<user[]> => {
    const resp = await axios.get('https://labenews.herokuapp.com/subscribers')
    return resp.data
} */
//exercicio 3
type user = {
    id: string,
    name: string,
    email: string
}
//a) Nao, a funcao retorna um array de objetos que seguem a msm tipagem criada
//b) Para evitar erros, pois como JS eh uma linguagem onde roda em sequencia, ele nao espera a execução de um promise para ir para outro codigo, isso pode acarretar em erros que passam imperceptiveis
//c
/* const getSubscribers= async():Promise<user[]> => {
    const resp = await axios.get('https://labenews.herokuapp.com/subscribers')
    return resp.data.map((res:any)=>{
        return{
            id:res.id,
            name:res.name,
            email:res.email
        }
    })
} */
//exercicio 4
//a) é do tipo void, pois ela esta criando um conteudo e nao retorna nada pro nosso codigo
//b)
const createNews = async (title: string, content: string, date: number): Promise<void> => {
    try {
        console.log("Chamou")
        await axios.put('https://labenews.herokuapp.com/news', { title: title, content: content, date: date })

    } catch (err: any) {
        console.log(err.response?.data || err.message)
    }

}
//exercicio 5
/* const sendNotifications = async (users: user[], message: string): Promise<void> => {

    try {
        for (const user of users) {
            await axios.post(`https://labenews.herokuapp.com/notifications`, {subscriberId: user.id,message});
        }

        console.log("All notifications sent");
    } catch {
        console.log("Error");
    }
}; */
//exercicio6
//a) Ela resolve todas as promises, para retornar uma unica promise
//b)Tempo de execução
//c)
const sendNotifications = async (users: user[], message: string): Promise<void> => {

    try {
        const promises =users.map(user=>{
            return axios.post(`https://labenews.herokuapp.com/notifications`, {subscriberId: user.id,message});
        
        })
        await Promise.all(promises)
    } catch {
        console.log("Error");
    }
};

const main = async () => {
    try {
        await createNews("Hoje fez sol com chuva", "Um evento surpreende aconteceu na cidade de volta redonda, sol com chuva casamento de viuva.", Date.now())

    } catch (err: any) {
        console.log(err.response?.data || err.message)
    }
}

main()