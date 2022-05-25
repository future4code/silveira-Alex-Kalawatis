//exercicio 1

function checaTriangulo(ladoA:number,ladoB:number,ladoC:number):string{
    if(ladoA !== ladoB && ladoB !== ladoC){
        return "Escaleno"
    }else if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    }else{
        return "Isósceles"
    }
}
console.log(checaTriangulo(1,2,4))

console.log("\r")

//exercicio2
function imprimeTresCoresFavoritas():void {
   const cor1:string = "Azul"
   const cor2:string = "Preto"
   const cor3:string = "Verde"
   console.table([cor1, cor2, cor3])
}
imprimeTresCoresFavoritas();

console.log("\r")

//exercicio3
function checaAnoBissexto(ano:number):boolean {
    const cond1:boolean = ano % 400 === 0
    const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
}
if(checaAnoBissexto(2032)){
    console.log("É ano bissexto")
}else{
    console.log("Não é ano bissexto")
}

console.log("\r")

//exercicio4
function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero:number;
    let menorNumero:number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca:number = maiorNumero - menorNumero;
  
    return diferenca 
}
console.log("A diferença entre o maior e o menor é " + comparaDoisNumeros(20,50))

console.log("\r")

//exercicio5
function checaRenovacaoRG(anoAtual:number,anoNascimento:number,anoEmissao:number):boolean {
    const idade:number = anoAtual - anoNascimento
    const tempoCarteira:number = anoAtual - anoEmissao
 
    const cond1:boolean = idade <= 20 && tempoCarteira >= 5
    const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3:boolean = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
}
if(checaRenovacaoRG(2022,1996,2015)){
    console.log("Renovar RG")
}else{
    console.log("Não precisa renovar RG")
}

console.log("\r")

//exercicio6

function operacoesNumericas(num1:number,num2:number):void{
    console.log(`A soma dos numeros: ${num1+num2}`)
    console.log(`A difença dos numeros: ${num1-num2}`)
    console.log(`A multipicação dos numeros: ${num1*num2}`)
    if(num1>num2){
        console.log(`${num1} é maior que ${num2}`)
    }else if(num2>num1){
        console.log(`${num2} é maior que ${num1}`)
    }else{
        console.log("Numeros iguais")
    }
}
operacoesNumericas(5,6)

console.log("\r")

function dnaToRna (dna:string):void{
    /* const aux:string = dna; */
    let i:number;
    let aux:string = "" 
    for(i=0;i<dna.length;i++){
        switch(dna[i]){
            case 'A':
                aux+='U';
                break;
            case 'T':
                aux+='A';
                break;
            case 'G':
                aux+='C';
                break;
            case 'C':
                aux+='G';
                break;
            default:
               break;
        }
    }
    console.log(aux)
}
dnaToRna("ATTGCTGCGCATTAACGACGCGTA")