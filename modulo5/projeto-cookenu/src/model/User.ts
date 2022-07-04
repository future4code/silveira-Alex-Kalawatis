export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
} 
export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLE
    ){}
    
    public getRole(): USER_ROLE {
        return this.role;
    }
    public getPassword(): string {
        return this.password;
    }
    public getEmail(): string {
        return this.email;
    }
    public getName(): string {
        return this.name;
    }
    public getId(): string {
        return this.id;
    }

    static toUserModel(data:any): User {
        return new User(data.id, data.name,data.email, data.password,data.role)
    }
}