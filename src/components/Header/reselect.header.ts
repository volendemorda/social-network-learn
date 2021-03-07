import { AppReducer } from "../../Redux/redux-store"


export const getAuthData = (state:AppReducer)=>{
    return state.AuthPage.isAuth
}
export const getLoginData = (state:AppReducer)=>{
    return state.AuthPage.login
}
export const getEmailData = (state: AppReducer)=>{
    return state.AuthPage.email
}
export const activeSidebar = (state: AppReducer)=>{
    return state.AuthPage.isActive
}