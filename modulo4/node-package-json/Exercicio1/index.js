// Exercicio 1) a) Atraves do process.argv

//b)
var clc = require("cli-color")
const nome = process.argv[2]
const idade = Number(process.argv[3])

if (nome === undefined  || isNaN(idade)) {
    console.log(clc.red.bold("Esperava dois parametro só recebi um"))
} else {
    console.log(clc.red.bgYellow.underline(`Olá, ${nome}! `) + clc.green.bgWhite.bold(`Voce tem ${idade} anos.`))

    console.log(clc.red.bgYellow.underline(`Olá, ${nome}! `) + clc.green.bgWhite.bold(`Voce tem ${idade} anos.`) + clc.blue.bgGreen.italic(`Em sete anos você terá ${idade + 7}`))
}
// clc.red.bgBlack.underline(`Olá, ${nome}! `) clc.green.bgWhite.bod(`Voce tem ${idade} anos.`) clc.yellow.bgGreen.italic(`Em sete anos você terá ${idade + 7}`)