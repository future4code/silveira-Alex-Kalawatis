```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let cont = 0
  for(let i=0;i<arrayDeNumeros.length;i++){
    if(numeroEscolhido === arrayDeNumeros[i]){
      cont++
    }
  }
  if(cont === 0){
    return `Número não encontrado`
  }else{
    return `O número ${numeroEscolhido} aparece ${cont}x`
  }
}
```