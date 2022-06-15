import connection from "./connection";

const printError = (err:any) =>{
    console.log(err.sqlMessage || err.message)
}

const createTable = ()=> connection
    .raw(`
        CREATE TABLE IF NOT EXISTS address (
            id VARCHAR(255) PRIMARY KEY,
            cep VARCHAR(255) NOT NULL,
            logradouro VARCHAR(255) NOT NULL,
            numero INT NOT NULL,
            complemento VARCHAR(255) NOT NULL,
            bairro VARCHAR(255) NOT NULL,
            cidade VARCHAR(255) NOT NULL,
            Estado VARCHAR(255) NOT NULL
        );
    `)
    .then(()=>{console.log("Tabela Criada")})
    .catch(printError)

createTable()
