
import {authAPI} from "../components/API/authAPI";
import {authActionTypes,initAuthStateTypes} from './../type/AuthTypes'
import { ThunkDispatchType, ThunkType} from "../type/ThunkType";
import { inferActionType } from "./redux-store";

const initAuthState:initAuthStateTypes = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        error: null,
        isActive: false
}

export const authUserReducer = (state = initAuthState, action:ActionType):initAuthStateTypes=>{
    switch (action.type){
        case authActionTypes.getAuth:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case authActionTypes.ActivateSidebar:
            return{
                ...state,
                isActive: action.isActive
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
type ActionType = inferActionType<typeof AuthAction>
export const AuthAction ={
    authAC: (id:null | number,email: null | string, login: null | string)=>({type: authActionTypes.getAuth,data:{id,email,login}} as const),
    activateSidebar:(isActive:boolean)=>({type: authActionTypes.ActivateSidebar,isActive} as const),
    errorAC: (error: null | string)=>({type: authActionTypes.errorData,error} as const)
} 
 
//thunkCreator
export const getUserDataIsAuthThunkCreator = (): ThunkType=>{
    return async (dispatch:ThunkDispatchType)=>{
        try{
            const data = await authAPI.getUserAuth();
            if (data.data.resultCode === 0){
                const {id,email,login} = data.data.data
                dispatch(AuthAction.authAC(id,email,login))
            }
        }
        catch(error){
            dispatch(AuthAction.errorAC(error))
        }
    }
}