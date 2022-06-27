### Exercicio1
a) Melhor que usar somente numeros, pois existem maiores opções de combinações, o que diminui a probabilidade de exister ids iguais.

### Exercicio 2
a) o codigo faz uma conexão com o mysql via lib do knex, com isso eh possivel enviar comandos ao servidor do mySQL.
b)CREATE TABLE IF NOT EXISTS User (
    id VARCHAR(100) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
### Exercicio 3
a) Transforma a atribuicao em uma string, para garantir que nao haja nenhum erro.

### Exercicio 7
a) Ela transforma a variavel num tipo any. Para podermos tipificar do jeito que queremos