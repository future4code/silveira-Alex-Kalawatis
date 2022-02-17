/**Exercicio de interpretação

Exercicio 1
a) Vai ser impresso o valor do argumento multiplicado por 5, no caso 10 e 50 sao os resultados do console.log.
b) Ela vai ser executada porem como nao esta sendo guardada em nenhuma variavel logo o valor seria descartado, nao iria aparecer nada no console.

Exercicio 2
a) Essa funçao recebe uma string como argumento, e retorna um valor booleano (true ou false), por causa do metodo includes.
b) Todas as repostas serao true.
 */
// Exercicio de escrita de codigo

//Exercicio 1
/* 
function imprimeTexto() {
    console.log("Eu sou Alex, tenho 26 anos, moro em Volta Redonda e nao sou estudante.")
}

imprimeTexto()
*/
/*
const imprimeTexto2 = function (nome, idade, cidade, profissao){
    console.log("Eu sou "+nome+", tenho "+idade+" anos, moro em "+cidade+" e sou "+profissao+".")

}
let nome,idade,cidade, profissao;

nome = prompt("Digite seu nome: ")
idade = prompt("Digite sua idade: ")
cidade = prompt("Digite sua cidade: ")
profissao = prompt("Digite sua profissao: ")

imprimeTexto2(nome, idade,cidade,profissao)
*/
//Exercicio 2
//a
/*
let soma = function(num1, num2){
    return num1+num2
}
let resultado
resultado = soma(5,6)
console.log(resultado)

//b
const compara = function(num1, num2){
    return num1 >= num2
}

resultado = compara (5,6)
console.log(resultado)
//c
const ehPar = function (num1){
    return num1%2 === 0
}
resultado = ehPar(6)
console.log(resultado)
//d 
const formataTexto = texto =>{

    console.log(texto.toUpperCase(),texto.length)
}
const texto1 = 'Ola, Mundo !'
formataTexto(texto1)
*/
//Exercicio 3
const somaNum = (num1,num2)=>{
    return num1 + num2
}
const difNum = (num1,num2)=>{
    return num1 - num2
}
const multNum = (num1,num2)=>{
    return num1*num2
}
const divNum = (num1,num2)=>{
    return num1/num2
}
let numero1, numero2;
numero1 = Number(prompt("Digite um numero: "))
numero2 = Number(prompt("Digite um numero: "))

console.log("Numeros inseridos:",numero1, "e",numero2)
console.log("Soma: "+somaNum(numero1,numero2))
console.log("Diferença: "+difNum(numero1,numero2))
console.log("Multiplição: "+multNum(numero1,numero2))
console.log("Divisão: "+divNum(numero1,numero2))