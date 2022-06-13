type Product ={
    id:string,
    name:string,
    price:number
}
export function makeid(length:number):string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

export let products:Product[] =[
    {
        id:makeid(10),
        name: "Camisa",
        price: 120
    },
    {
        id: makeid(10),
        name: 'Short',
        price: 100
    },
    {
        id: makeid(10),
        name: 'Calça',
        price: 150
    }
]