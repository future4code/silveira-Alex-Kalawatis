/**Exercicio de interpretação 

Exercicio 1

a. undefined

b. null

c. 11

d. 3

e. [3, 19, 5, 6, 7,...]

f. 9

2. SUBI NUM ONIBUS EM MIRROCOS, 27
 */
//Exercicio de escrita de codigo:
//Exercicio 1

/*let nomeDoUsuario, emailDoUsuario;

nomeDoUsuario = prompt("Digite seu nome");
emailDoUsuario= prompt("Digite seu email");

console.log("O email "+ emailDoUsuario+ " foi cadastrado com sucesso. Seja bem-vinda(o), "+nomeDoUsuario+ " !");
*/
//Exercicio 2

/*let arrayComida = ['macarrao','hamburguer', 'pizza','picanha','feijoada'];

//a.
console.log(arrayComida);

//b.
console.log("Essas sao minhas comidas preferidas: ");
console.log("1. ", arrayComida[0]);
console.log("2. ", arrayComida[1]);
console.log("3. ", arrayComida[2]);
console.log("4. ", arrayComida[3]);
console.log("5. ", arrayComida[4]);
//c
const comidaUser = prompt("Digite sua comida preferida: ");
arrayComida.splice(1,1,comidaUser);

console.log(arrayComida);
*/
let listaDeTarefa = [];
let aux = prompt("Digite a primeira tarefa: ");

listaDeTarefa.push(aux);
aux = prompt("Digite a segunda tarefa: ");
listaDeTarefa.push(aux);
aux = prompt("Digite a terceira tarefa: ");
listaDeTarefa.push(aux);

console.log(listaDeTarefa);

let i = prompt("Digite uma tarefa realizada de 1 a 3.")
listaDeTarefa.splice(i-1,1);

console.log(listaDeTarefa);