/**EXercicios de interpretação
 
Exercicio 1
a. Ele testa se o numero é par atraves de uma tomada de decisao.

b. Numeros divisiveis por 2 ou seja os pares

c. Todos que nao sao pares.

Exercicio 2
a.Selecionar o preço da fruta inserido pelo usuario.

b. "O preço da fruta maçã é, R$ 2.25"

c. "O preço da fruta pêra é, R$ 5"

Exercicio 3

a. Ta pedindo um numero para o usuario atraves do prompt e convertendo a string para um tipo numero

b.Se for 10: "Esse número passou no teste", se for -10 nao sera exibido nada

c. Tera um erro com a variavel mensagem pois ela foi declarada dentro de escopo local, e logo nao pode ser acessada pelo escopo global o ultimo console log nao sera executado pois a variavel nunca foi declarada

 */

//Exercicio de escrita

//Exercicio 1
/*const usuario ={
    nome: prompt("Digite seu nome"),
    idade: Number(prompt("Digite sua idade"))
}
if(usuario.idade >= 18){
    console.log("Voce pode dirigir")
}
else{
    console.log("Voce não pode dirigir")
}
*/
//Exercicio 2
/*const verifica = prompt("Digite M(matutino), V(vespertino) ou N(Noturno) para identificar seu horario de aula.")

if(verifica.toUpperCase() === 'M'){
    console.log("Bom Dia !")
}
else if (verifica.toUpperCase() === 'V'){
    console.log("Boa Tarde !")
}
else{
    console.log("Boa Noite !")
}
*/
//Exercico 3
const verifica = prompt("Digite M(matutino), V(vespertino) ou N(Noturno) para identificar seu horario de aula.");

switch(verifica.toUpperCase()){
    case 'M':
        console.log("Bom dia !")
        break
    case 'V':
        console.log("Boa tarde !")
        break
    case 'N':
        console.log("Boa noite !")
        break
    default:
        console.log("Horario nao encontrado")
        break
}
//Exercicio 4
const genero = prompt("Digite o genero do filme")
const preco = +prompt("Digite o preco do filme")

if (genero.toLowerCase() === 'fantasia' && preco < 15){
    console.log("Bom Filme !")
}
else{
    console.log("Escolha outro filme !")
}