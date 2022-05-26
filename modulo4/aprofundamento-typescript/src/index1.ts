// exercicio1
//a) Aparece um erro, onde fala que a variavel minhaString so aceita string.

const minhaString:string = 'Alex';

//b) Utilizando o Union Type |

const meuNumero:number | string = "29";

//c)

type Pessoa = {
    nome:string,
    idade:number,
    corFavorita: corFavorita
}
enum corFavorita{
    RED = "Vermelho",
    ORANGE = "Laranja",
    YELLOW = "Amarelo",
    GREEN = "Verde",
    BLUE = "Azul",
    INDIGO = "Anil",
    VIOLET = "Violeta"
}
const pessoa1:Pessoa ={nome:"Alex",idade:26,corFavorita: corFavorita.INDIGO}
const pessoa2:Pessoa={nome:'Betina',idade:23,corFavorita: corFavorita.BLUE}
const pessoa3:Pessoa={nome:"Caio",idade:34,corFavorita:corFavorita.RED}

console.table(pessoa1)
console.table(pessoa2)
console.table(pessoa3)