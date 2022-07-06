export enum POST_TYPE {
    NORMAL = "normal",
    EVENT = "event"
}

export default class Post {
    constructor(
        private id:string,
        private photo:string,
        private description:string,
        private type:POST_TYPE,
        private created_at:string,
        private author_id: string
    ){}
    
}
