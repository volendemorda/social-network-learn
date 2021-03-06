import {AuthMeType} from "../../type/TypeAxiosAPI";
import {instance} from "./API";

export const authAPI = {
    getUserAuth(){
        return instance.get<AuthMeType>(`/auth/me`)
    }
}