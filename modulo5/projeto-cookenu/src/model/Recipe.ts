

export class Recipe {
    constructor(
        private id:string,
        private title: string,
        private description: string,
        private created_at: Date,
        private user_id: string 
    ){}
    public getId() : string {
        return this.id
    }
    public getTitle():string {
        return this.title
    }
    public getDescription(): string{
        return this.description
    }
    public getDate():Date {
        return this.created_at
    }
    public getUserId():string{
        return this.user_id
    }
    static toRecipeModel(data:any):Recipe{
        return new Recipe(data.id,data.title,data.description,data.date, data.user_id)
    }
}