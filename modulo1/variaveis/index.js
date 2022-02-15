/**Exercio interpretacao de codigo
 
1. Será impresso 10 na primeira linha e 10 5 na segunda linha

2. Será impresso 10 10 10

3. horasTrabalhadas e salarioDia
 */

//Exercio de escrita de codigo

//Exercicio 1

let nome;
let idade;

console.log(typeof nome, typeof idade);
// o resultado exibido no console foi de undefined, isso ocorreu pq as variaveis foram declaradas usando let e nao teve nenhum valor atribuido.

nome = prompt("Qual é seu nome ?");
idade = prompt("Qual é a sua idade ?");

console.log(typeof nome, typeof idade);

// o resultado obtido foram duas strings, isso ocorreu pois foram entradas de texto do usuario.

console.log("Olá",nome, ", voce tem ", idade, "anos.")

//Exercicio 2

let var1, var2, var3;
const pergunta1 = "O ceu esta azul ?", pergunta2 = "Voce gosta de cafe ?", pergunta3 ="Esta calor ?"

var1 = prompt("O ceu esta azul ?");
console.log(pergunta1, "-", var1);

var2 = prompt("Voce gosta de cafe ?");
console.log(pergunta2, "-", var2);

var3 = prompt("Esta calor ?");
console.log(pergunta3, "-", var3);

//Exercicio 3

let a = 10;
let b = 25;

let c = b;
b = a;
a = c;

console.log("O novo valor de a é:", a);
console.log("O novo valor de b é:", b);

//Desafio

let num1;
let num2;
let aux;

num1 = Number(prompt("Digite o primeiro numero: "));
num2 = Number(prompt("Digite o segundo numero: "));

aux = num1 + num2;
console.log("O primeiro número somado ao segundo número resulta em:", aux);

aux = num1 * num2;
console.log("O primeiro número multiplicado pelo segundo número resulta em:",aux);