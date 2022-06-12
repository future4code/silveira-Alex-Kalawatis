import connection from "./connection";

export const createUser = async (name: string, nickname: string, email: string): Promise<any> => {
    await connection("TodoListUser")
        .insert({
            id: Date.now().toString(),
            name: name,
            nickname: nickname,
            email: email
        })
        .into("TodoListUser")
}
export const getUserById = async (id: string): Promise<any> => {
    const result = await connection("TodoListUser")
        .select('id', 'nickname')
        .where("id", id)

    return result;

}

export const editUser = async (id: string, name: string, nickname: string): Promise<any> => {
    await connection("TodoListUser")
        .update({
            name: name,
            nickname: nickname
        })
        .where("id", id)

}
const convertDate = (date: string): string => {
    const arrDate = date.split('/')
    return `${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`
}
export const createTask = async (title: string, description: string, limitDate: string, creatorUserId: string): Promise<any> => {
    await connection("TodoListTask")
        .insert({
            id: Date.now().toString(),
            title: title,
            description: description,
            limit_date: convertDate(limitDate),
            creator_user_id: creatorUserId
        })
        .into("TodoListTask")

}

export const selectTableUserTask = async (): Promise<any> => {
    const result = await connection("TodoListTask")
        .select('TodoListTask.id', 'title', 'description', 'limit_date', 'status', 'creator_user_id', 'nickname')
        .from("TodoListTask")
        .join('TodoListUser', { 'TodoListTask.creator_user_id': 'TodoListUser.id' })
    return result

}
export const getAllUsers = async (): Promise<any> => {
    const result = await connection("TodoListUser")
        .select('id', 'nickname')
        .from("TodoListUser")
        .orderBy('id', 'asc')
    return result;
}
export const selectUser = async (): Promise<any> => {
    const result = await connection("TodoListUser")
        .select('id', 'nickname')
        .from("TodoListUser")
        .orderBy('id', 'asc')
    return result;
}
export const insertTaskResposible = async (taskId: string, responsibleUserId: string): Promise<any> => {

    await connection("TodoListResponsibleUserTaskRelation")
        .insert({
            task_id: taskId,
            responsible_user_id: responsibleUserId
        }).into("TodoListResponsibleUserTaskRelation")

}