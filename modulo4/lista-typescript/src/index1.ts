function arrayText(nome: string, data: string):string {
    const myArray = data.split("/")
    switch (myArray[1]) {
        case '01':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Janeiro do ano de ${myArray[2]}`
        case '02':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Fevereiro do ano de ${myArray[2]}`
        case '03':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Março do ano de ${myArray[2]}`
        case '04':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Abril do ano de ${myArray[2]}`
        case '05':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Maio do ano de ${myArray[2]}`
        case '06':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Junho do ano de ${myArray[2]}`
        case '07':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Julho do ano de ${myArray[2]}`
        case '08':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Agosto do ano de ${myArray[2]}`
        case '09':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Setembro do ano de ${myArray[2]}`
        case '10':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Outubro do ano de ${myArray[2]}`
        case '11':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Novembro do ano de ${myArray[2]}`
        case '12':
            return `Olá me chamo ${nome}, nasci no dia ${myArray[0]} do mês de Dezembro do ano de ${myArray[2]}`
        default:
            return "Data ou nome incorretos"
    }
}
console.log(arrayText('Alex','29/02/1996'))