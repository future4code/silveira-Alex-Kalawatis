const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
var clc = require("cli-color")

// const red, green,cyan,
if(operacao	=== undefined || isNaN(num1) || isNaN(num2)){
    console.log(clc.red.bold("Faltam um ou mais paramentros"))
}else{
    switch(operacao){
        case 'div':
            console.log(clc.red(`Resposta: ` + clc.blue.bold(`${num1/num2}`)))
            break;
        case 'mult':
            console.log(clc.red(`Resposta: ` + clc.blue.bold(`${num1*num2}`)))
            break;
        case 'add':
            console.log(clc.red(`Resposta: ` + clc.blue.bold(`${num1+num2}`)))
            break;
        case 'sub':
            console.log(clc.red(`Resposta: ` + clc.blue.bold(`${num1-num2}`)))
            break;
        default:
            console.log(clc.magenta.bold("Escolha: div para divisao, mult para multiplicação, add para adição e sub para"))
            break;    
    }

}

