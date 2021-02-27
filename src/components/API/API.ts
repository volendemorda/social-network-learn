import {AuthMeType, UsersType} from "../../type/TypeAxiosAPI";
import axios from "axios";
import {ProfileType} from "../../type/ProfileTypes";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {"API-KEY": "95e2747c-ac00-46b2-b2d4-e56b2e7f2a69"}
})


export const userAPI = {
    getUsers (currentPage = 1,pageSize = 9){
        return instance.get<UsersType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow (id:number){
        return instance.post(`/follow/${id}`)
    },
    unFollow(id:number){
        return instance.delete(`/follow/${id}`)
    }
}

export const authAPI = {
    getUserAuth(){
        return instance.get<AuthMeType>(`/auth/me`)
    }
}
export const profileAPI = {
    getProfileUser(id:number){
      return instance.get<ProfileType>(`/profile/${id}`)
    },
     updateStatus(status:string){
        return instance.put('/profile/status',{status})
    },
    getStatus(userId:number){
        return instance.get<string>(`/profile/status/${userId}`)
    },
    updatePhoto(image:any){
        const file = new FormData()
        file.append("image",image)
        return instance.put('profile/photo',file,{
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}


