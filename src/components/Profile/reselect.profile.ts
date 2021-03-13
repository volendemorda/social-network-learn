import {AppReducer} from "../../Redux/redux-store"



export const Selector = {
    getProfile: (state: AppReducer)=>{    
        return state.ProfilePage.profile
    },
    getStatus: (state: AppReducer)=>{
        return state.ProfilePage.status
    },
    getError: (state: AppReducer)=>{
        return state.ProfilePage.error
    }
}
