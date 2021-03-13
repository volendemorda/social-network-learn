import {IUnFollowType, UsersType} from "../../type/TypeAxiosAPI";
import {instance} from "./API";

export const userAPI = {
    getUsers (currentPage = 1,pageSize = 9){
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow (id:number){
        return instance.post(`/follow/${id}`)
    },
    unFollow(id:number){
        return instance.delete<IUnFollowType>(`/follow/${id}`)
    }
}