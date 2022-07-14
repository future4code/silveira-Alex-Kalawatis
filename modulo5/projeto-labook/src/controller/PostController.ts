import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { findByIdDTO } from "../types/findByIdDTO";
import { postInputDTO } from "../types/postInputDTO";

export class PostController {
    constructor(
        private postBusiness : PostBusiness
    ){}

    createPost = async (req:Request,res:Response) =>{
        const auth = req.headers.authorization as string
        const {photo,description,type,created_at} = req.body
        const post : postInputDTO = {
            photo,
            description,
            type,
            created_at,
            auth
        }
        try {
            const newPost = await this.postBusiness.createPost(post)
            res.status(201).send({message: "Post criado !!"})
        } catch (error:any) {
            if(res.statusCode === 200){
                res.status(500).send({message:error.message})
            }else {
                res.status(res.statusCode).send({message: error.sqlMessage || error.message})
            }
        }
    }
    findPostById = async (req:Request,res:Response) =>{
        const auth = req.headers.authorization as string
        const id = req.params.id
        const input:findByIdDTO ={
            id,
            auth
        }
        try {
            const post = await this.postBusiness.findPostById(input)
            res.status(200).send({post})
        } catch (error:any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
    }
}