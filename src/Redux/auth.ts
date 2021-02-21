
import {authAPI} from "../components/API/API";
import {ActionType, authActionTypes, authACtype, errorACtype, initAuthStateTypes} from './../type/AuthTypes'

const initAuthState:initAuthStateTypes = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        error: null
}

export const authUserReducer = (state = initAuthState, action:ActionType):initAuthStateTypes=>{
    switch (action.type){
        case authActionTypes.getAuth:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case authActionTypes.errorData:
            return{
                ...state,
                error: action.error
                }
        default:
            return state
    }
}

export const authAC = (id:null | number,email: null | string, login: null | string):authACtype=>{
    return{
        type: authActionTypes.getAuth,
        data:{
            id,
            email,
            login
        }
    }
}

export const errorAC = (error: null | string):errorACtype=>{
    return{
        type: authActionTypes.errorData,
        error
    }
}

//thunkCreator
export const getUserDataIsAuthThunkCreator = () =>{
    return async (dispatch:any)=>{
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