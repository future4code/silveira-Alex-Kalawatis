/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas Vindas ao jogo de Blackjack")


if(confirm("Quer iniciar uma nova rodada ?")){
  let i = 0
  const cartaUsuario = []
  const cartaComputador = []
  while(i<2){
     cartaUsuario.push(comprarCarta())
     cartaComputador.push(comprarCarta())
     i++
  }
  let somaUsuario = 0, somaComputador = 0
  for(let j= 0; j<cartaUsuario.length;j++){
      somaUsuario += cartaUsuario[j].valor
      somaComputador += cartaComputador[j].valor
  }
  console.log("Usuario - cartas "+cartaUsuario[0].texto +" "+cartaUsuario[1].texto+ " - pontuação "+somaUsuario)
  console.log("Computador - cartas "+cartaComputador[0].texto +" "+cartaComputador[1].texto+ " - pontuação "+somaComputador)
  if(somaUsuario>somaComputador){
     console.log("O usuario ganhou!")
  }else if(somaUsuario<somaComputador){
     console.log("O computador ganhou!")
  }else{
     console.log("Empate!")
  }

  
}else{
   console.log("O jogo acabou !")
}

