
import {authAPI, userAPI} from "../components/Users/API";

const getAuth = 'getAuth'


const initAuth = {
        id: null,
        email: null,
        login: null,
        isAuth: false
}
export const authUserReducer = (state = initAuth, action)=>{

    switch (action.type){
        case getAuth:
            return {
                ...state,
                ...action.data,
                isAuth: true
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

export const getUserDataIsAuthThunkCreator = () =>{
    return dispatch=>{
        authAPI.getUserAuth()
            .then(data => {
                if (data.resultCode === 0){
                    const {id,email,login} = data.data
                    dispatch(authAC(id,email,login))
                }
            })
    }
}