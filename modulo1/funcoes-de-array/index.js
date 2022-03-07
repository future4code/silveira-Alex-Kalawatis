/**Exercicio de interpretaçao 

Exercicio 1
a. Sera mostrado os objetos, o index de cada objeto e uma lista com os objetos

Exercicio 2
a. Sera mostrado somente um array com os nomes contidos no objeto

Exercicio 3
a. um array de objetos que nao contenham "Chijo" no item apelido.
 
*/

//Exercicio de escrita

//Exercicio 1

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
const petNomes = pets.map((item, _index, _array) =>{
    return item.nome
})
console.log(petNomes)

const petsSalsicha = pets.filter((item,_array) =>{
    return item.raca === "Salsicha"
})
console.log(petsSalsicha)

const petsPoodle = pets.filter((_item) =>{
    return _item.raca === "Poodle"
}).map(item =>{
    return `Voce ganhou um cumpom de desconto de 10% para tosar o/a ${item.nome}`
}) 

console.log(petsPoodle)
