// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
  return array.sort(function(a,b){
      return a-b
  })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const numPar = array.filter((lista) =>{
      return lista%2 === 0

  })
  return numPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numParQuadrado = array.filter((lista) =>{
        return lista%2 === 0
  
    }).map((lista) =>{
        return lista*lista

    })
    return numParQuadrado

 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNum = -1000
    let i =0

    while(i<array.length){
        if(array[i]>maiorNum){
            maiorNum = array[i]
        }
        i++
    }
    return maiorNum
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const comparaNum = (num1,num2) =>{
        if(num1>num2){
            return num1
        }else{
            return num2
        }
    }
    const divisivelPorMaior = (num1,num2)=>{
        aux = comparaNum(num1,num2)
        if(aux%num1 === 0 && aux%num2 === 0){
            return true
        }else{
            return false
        }
    }
    const diferencaPositiva = (num1,num2)=>{
        aux = comparaNum(num1,num2)
        if(aux === num1){
            return num1 -num2
        }else{
            return num2-num1
        }
    }
    const objeto = {maiorNumero:comparaNum(num1,num2),maiorDivisivelPorMenor:divisivelPorMaior(num1,num2),diferenca: diferencaPositiva(num1,num2)}
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}