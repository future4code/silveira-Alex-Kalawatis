import { getFullAddress } from "../services/getFullAdress";
import { Request, Response } from "express"
import { AddressLong } from "../types/typeAdress";
import insentAddress from './insertAdress'


export const postAddress = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const result = await getFullAddress(cep)
        if(!result){
            res.statusCode = 400
            throw new Error("Cep inexistente")  
        }
        const adress : AddressLong ={
            cep: cep,
            logradouro: result.logradouro,
            numero: req.body.numero,
            bairro: result.bairro,
            cidade: result.cidade,
            estado: result.estado
        }
        await insentAddress(adress)
        res.status(200).send("Endereço cadastrado")
    } catch (err: any) {
        res.send(err.sqlMessage || err.message)

    }
}
