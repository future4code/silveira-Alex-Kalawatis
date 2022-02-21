/**Exercicio de interpretação
 
Exercicio 1
a. Sera impresso: Matheus Nachtergaele, Virginia Cavendish e Denise Fraga respectivamente.

Exercicio 2
a. {nome: Juca, idade: 3, raca: SRD}, {nome: Juba, idade: 3, raca: SRD} e {nome: Jubo, idade: 3, raca: SRD}

b. Faz uma copia do objeto

Exercicio 3
a. sera impresso false para o primeiro console.log, pois backender é uma propriedade do objeto em questao, e o segundo sera undefined pq nao existe a propriedade altura no objeto.

b. 
 */

//Exercicio de escrita 

/*Exercicio 1
//a
const pessoa ={
    nome: "Amanda",
    apelido: ["Amandinha","Mandinha","Mandi"]
}
function imprimeMensagem (objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido[0]}, ${objeto.apelido[1]} ou ${objeto.apelido[2]}`)
}
imprimeMensagem(pessoa)
//b
const pessoa1 = {
    ...pessoa,
    apelido: ["Mandy","Mands","Amandi" ]
}
imprimeMensagem(pessoa1)
*/
//Exercicio 2
//a
/*const objeto1 ={
    nome: "Alex",
    idade: 26,
    profissao: "Engenheiro"
}
const objeto2 ={
    ...objeto1,
    nome: "Betina",
    profissao: "Medica"
}
//b
function minhaFuncao(objeto){
    const array = []
    array.push(objeto.nome,objeto.nome.length,objeto.idade,objeto.profissao,objeto.profissao.length)
    return array
}
console.log(minhaFuncao(objeto1))
console.log(minhaFuncao(objeto2))
*/

//Exercicio 3
const carrinho = []
const fruta1 ={
    nome: "Banana",
    disponibilidade: true
}
const fruta2 = {
    ...fruta1,
    nome: "Uva"
}
const fruta3 = {
    ...fruta1,
    nome: "Pera"
}
function funcaoCarrinho (objeto){
    
    carrinho.push(objeto)
} 
funcaoCarrinho(fruta1)
funcaoCarrinho(fruta2)
funcaoCarrinho(fruta3)
console.log(carrinho)
