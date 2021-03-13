import {ProfileType} from "../../type/ProfileTypes";
import {instance} from "./API";

export const profileAPI = {
    getProfileUser(id:number){
        return instance.get<ProfileType>(`/profile/${id}`)
    },
    updateStatus(status:string | null){
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