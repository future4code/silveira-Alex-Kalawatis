//exercicio2
//a) Entrada: array de numeros Saida: objeto
type Estatistica = {
    maior:number,
    menor:number,
    media: number
}
const numeros=[3,4,5,6,7,27,39]
function obterEstatisticas(numeros:Array<number>) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas(numeros))