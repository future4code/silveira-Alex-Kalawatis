enum ROLE {
    ADMIN = "admin",
    USER = "user"
}
type User =
{
    name:string,
    email:string,
    role:ROLE
}
type Users = Array<User>

const users : Users =  [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 
function buscaRole(array:Users):Array<string>{
    const arrayEmail= array.filter((u)=>{
        if(u.role === ROLE.ADMIN){
            return u.email
        }
    })
    return arrayEmail.map((e)=>{
        return e.email
    })
}
console.log(buscaRole(users))