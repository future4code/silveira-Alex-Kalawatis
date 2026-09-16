import { POST_TYPE } from "../model/Post"

export type postInputDTO = {
    photo:string,
    description:string,
    type: POST_TYPE,
    created_at:Date,
    auth:string
}