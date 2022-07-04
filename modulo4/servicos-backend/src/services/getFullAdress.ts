import axios from "axios";
import { AddressShort } from "../types/typeAdress";

export const getFullAddress =async (cep:string): Promise<AddressShort | undefined> => {
    try{
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        if(!result){
            throw new Error("Requisicao invalida")
        }
        
        const address:AddressShort ={
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }
        return address;
    }catch(err:any){
        return undefined;
    }
}