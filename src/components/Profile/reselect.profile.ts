import {AppReducer} from "../../Redux/redux-store"


export const getProfile = (state: AppReducer)=>{    
    return state.ProfilePage.profile
}
export const getStatus = (state: AppReducer)=>{
    return state.ProfilePage.status
}

