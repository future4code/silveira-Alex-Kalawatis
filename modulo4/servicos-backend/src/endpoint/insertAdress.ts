import connection from "../data/connection";
import { AddressLong } from "../types/typeAdress";

export default async function insentAddress(address:AddressLong) {
    const {cep,logradouro,numero,bairro,cidade,estado} = address

    await connection("address").insert({
        id: Date.now().toString(),
        cep,
        logradouro,
        numero,
        bairro,
        cidade,
        estado
    })
}