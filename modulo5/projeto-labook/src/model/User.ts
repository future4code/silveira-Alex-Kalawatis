
export default class User {
   constructor(
        private id: string,
        private name: string,
        private email: string,
        private password:string
    ){}
    public getEmail(): string {
        return this.email;
    }
    
}