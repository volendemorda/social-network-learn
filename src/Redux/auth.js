
import {authAPI, userAPI} from "../components/Users/API";

const getAuth = 'getAuth'
const errorData = 'errorData'

const initAuth = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        error: null
}
export const authUserReducer = (state = initAuth, action)=>{

    switch (action.type){
        case getAuth:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case errorData:
            return{
                ...state,
                error: action.error
                }
        default:
            return state
    }
}

export const authAC = (id,email,login)=>{
    return{
        type: getAuth,
        data:{
            id,
            email,
            login
        }
    }
}
export const errorAC = (error)=>{
    return{
        type: errorData,
        error
    }
}

export const getUserDataIsAuthThunkCreator = () =>{
    return async dispatch=>{
        try{
            const data = await authAPI.getUserAuth();
            if (data.resultCode === 0){
                const {id,email,login} = data.data
                dispatch(authAC(id,email,login))
            }
        }
        catch(error){
            dispatch(errorAC(error))
        }
    }
}