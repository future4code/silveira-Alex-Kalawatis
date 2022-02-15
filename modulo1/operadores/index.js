/** Exercicio de interpretação:
 
1. a. false
   b. false
   c. true
   d. boolean

2. Sim, provavelmente ira dar erro pois as entradas feitas pelo usuario sao strings, seria necessario converter os dados de entrada de string para number.

3. let primeiroNumero = Number(prompt(...));
   let segundoNumero = Number(prompt(...));

   quando fazemos isso convertemos texto para numero de fato, e deste modo o programa consegue executar sem problemas a soma.
 
*/
// Exercicio de escrita
// Exercicio 1
let idade1, idade2, resposta, diferenca;

idade1 = Number(prompt("Digite a sua idade: "));
idade2 = Number(prompt("Digite a idade do seu amigo: "));

resposta = idade1 > idade2;
diferenca = idade1-idade2;

console.log("Sua idade é maior que a do seu amigo ?", resposta);
console.log("Diferença:", diferenca);

// Exercicio 2

let num1 = Number(prompt("Digite um numero par: "));

console.log(num1 % 2); // Existe um padrao, o resto sempre 0 pois numeros pares sao divisiveis por 2 logo o resto é 0.

// Caso o numero seja impar o resto vai ser diferente de 0

//Exercicio 3

let idadeAnos = Number(prompt("Digite sua idade: "));

console.log("Sua idade em meses:", idadeAnos*12);
console.log("Sua idade em dias:", idadeAnos*365);
console.log("Sua idade em horas:", idadeAnos*365*24);

//Exercicio 4
let primeiroNumero, segundoNumero, compara;

primeiroNumero = Number(prompt("Digite um numero:"));
segundoNumero = Number(prompt("Digite um numero:"));

compara = primeiroNumero > segundoNumero;
console.log("O primeiro numero é maior que o segundo ?", compara);

compara = primeiroNumero === segundoNumero;
console.log("O primeiro numero é igual ao segundo ?", compara);

compara = (primeiroNumero%segundoNumero) === 0;
console.log("O primeiro numero é divisível pelo segundo ?", compara);

compara = (segundoNumero%primeiroNumero) === 0;
console.log("O segundo numero é divisível pelo primeiro ?", compara);

//Desafio
//Exercicio 1
//a.
const temp1=77;

let calc = (temp1 -32)*(5/9) + 273.15;
console.log("A temperatura de 77 ºF em K é:", calc, "K.");
//b.
const temp2 = 80;

calc = temp2*(9/5) + 32;
console.log("A temperatura de 80 ºC em ºF é:", calc, "ºF.");

//c.
const temp3 = 30;

let calc2 = temp3*(9/5) + 32;
calc = (calc2 -32)*(5/9) + 273.15;
console.log("A temperatura de 30 ºC em ºF é:", calc2, "ºF. A temperatura de 30ºC em K é:", calc, "K.");

//d.
let temp4 = +prompt("Digite uma temperatura em Celsius: ");

calc2 = temp4*(9/5) + 32;
calc = (calc2 -32)*(5/9) + 273.15;
console.log("A temperatura de "+temp4+" ºC em ºF é:", calc2, "ºF. A temperatura de "+temp4+" ºC em K é:", calc, "K.");
//Exercicio 2
//a.
let consumo = +prompt("Digite a quantidade consumida pela residencia: ");
const precoUnit = 0.05;
let calculo = consumo*precoUnit;
console.log("Valor a ser pago é R$", calculo);

//b.
let discount = +prompt("Digite o valor do desconto: ")
calculo = (consumo*precoUnit)*(1-discount/100)
console.log("Valor a ser pago é R$", calculo);