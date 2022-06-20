class Transaction {
    private description: string;
    private value: number;
    private date: string;
   
    constructor(description:string, value:number,date:string){
        this.description = description;
        this.value = value;
        this.date = date
    }
    public getDescription(): string {
        return this.description;
    }
    public setDescription(value: string) {
        this.description = value;
    }
    public getValue(): number {
        return this.value;
    }
    public setValue(value: number) {
        this.value = value;
    }
    public getDate(): string {
        return this.date;
    }
    public setDate(value: string) {
        this.date = value;
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
   

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    public getTransactions(): Transaction[] {
        return this.transactions;
    }
    public setTransactions(value: Transaction[]) {
        this.transactions = value;
    }
    public getBalance(): number {
        return this.balance;
    }
    public setBalance(value: number) {
        this.balance = value;
    }
}

//exercicio1
//a) Um constrututor serve para criar um objeto da classe que tem esse constrututor, protegendo as informacoes contidas nessa classe. Chamamos como se fosse um metodo.
//b)Uma vez.
const novoUsuario = new UserAccount('12345678912', "Alex", 26)

//c) Atraves dos getters e setters

//exercicio2
const newTransaction = new Transaction("deposito",500,"20/06/2022")
novoUsuario.setTransactions([newTransaction])
console.log(novoUsuario)

//exercicio3
class Bank {
    private accounts: UserAccount[];
    
    constructor(accounts:UserAccount[]){
        this.accounts = accounts;
    }
    public getAccounts(): UserAccount[] {
        return this.accounts;
    }
    public setAccounts(value: UserAccount[]) {
        this.accounts = value;
    }
}
const newBank = new Bank([novoUsuario])
console.log(newBank)
