import connection from "./connection";
export const GetUserById = async (id:string):Promise<any> => {
    const result = await connection("TodoListUser")
    .select('id','nickname')
    .where("id",id)

    return result;
}

export const EditUser =async (id:string,name:string,nickname:string):Promise<any> => {
    await connection("TodoListUser")
    .update({
        name: name,
        nickname: nickname
    })
    .where("id",id)
}