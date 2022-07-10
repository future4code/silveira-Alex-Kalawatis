import { PostDatabase } from "../data/PostDatabase";
import Post, { POST_TYPE } from "../model/Post";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { findByIdDTO } from "../types/findByIdDTO";
import { postInputDTO } from "../types/postInputDTO";

export class PostBusiness {
    constructor(
        private postData: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator,
    ) { }

    createPost = async (post: postInputDTO) => {
        const { auth, photo, description, type } = post
        let { created_at } = post
        try {
            if(!auth){
                throw new Error("Insira um token por favor !!");
            }
            const userTokenData = this.authenticator.getTokenData(auth)

            if(!userTokenData){
                throw new Error("Token invalido.");
            }
            if(!description || !type){
                throw new Error("Por Favor enviar todos os campos do body !")
            }
            if(type !== POST_TYPE.NORMAL && type !== POST_TYPE.EVENT){
                throw new Error("Tipo invalid, preencha os cmapos com os valores de NORMAL ou EVENT");
            }
            if(!created_at){
                created_at = new Date()
            }
            const postId = this.idGenerator.generateId()
            const newPost = new Post(postId,photo,description,type,created_at,userTokenData.id)

            await this.postData.insertPost(newPost)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    findPostById =async (input:findByIdDTO) => {
        const {id,auth} = input
        try {
            if (!auth) {
                throw new Error("Insira um token porfavor!")
            }
            if(!id){
                throw new Error("Insira um id de post!")
            }
            const userTokenData = this.authenticator.getTokenData(auth)
            if(!userTokenData){
                throw new Error("Token invalido.");
            }
            const post = await this.postData.findPostById(id)

            if (!post) {
                throw new Error("Não existe nenhum post com esse ID!")
            }

            return post
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}