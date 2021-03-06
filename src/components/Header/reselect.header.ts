

export const getAuthData = (state)=>{
    return state.AuthPage.isAuth
}
export const getLoginData = (state)=>{
    return state.AuthPage.login
}
export const getEmailData = (state)=>{
    return state.AuthPage.email
}