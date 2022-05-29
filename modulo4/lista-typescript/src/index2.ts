function tipoVariavel(variavel:any):string{
    return typeof(variavel)
}
let bool:boolean=true, number:number=23, string:string='',array:[]=[];
console.log(tipoVariavel(bool),tipoVariavel(number),tipoVariavel(string),tipoVariavel(array))