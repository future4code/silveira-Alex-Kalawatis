enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function criaType(filmName:string,releaseDate:number,genero:GENERO,score?:number){
    type Filme = {
        nome: string,
        anoLancamento: number,
        genero:GENERO,
        puntuacao?: number 
    }
    const filme:Filme = {
        nome: filmName,
        anoLancamento: releaseDate,
        genero: genero,
        puntuacao : score
    }
    return filme
}
console.log(criaType("Duna", 2021, GENERO.ACAO, 74))