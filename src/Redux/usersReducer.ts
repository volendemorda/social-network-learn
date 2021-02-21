import {userAPI} from "../components/API/API";
import {
    ActionType,
    FollowActionCreatorType,
    initUsersTypes,
    listActionTypes,
    pageUsersActionCreatorType,
    setUsersActionCreatorType,
    toggleIsFetchingActionCreatorType,
    toggleIsGetDataFollowsActionCreatorType,
    UnFollowActionCreatorType
} from "../type/UsersTypes";

const initUsers: initUsersTypes = {
    users:[],
    currentPage: 1,
    totalCountUsers: 0,
    pageSize: 9,
    isFetching: false,
    disableButton: []
}
export const usersReducer = (state = initUsers, action: ActionType):initUsersTypes=>{
    switch (action.type){
        case listActionTypes.Follow:
          return {
              ...state,
              users: state.users.map(u=>{
                  if (u.id === action.userId){
                     return {
                         ...u,
                         followed: true
                         
                     }
                  }
                  return u
              })
          }
        case listActionTypes.UnFollow:
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId){
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }
        case listActionTypes.setUser:
            return {
                ...state,
                users: [...action.users],
                totalCountUsers: action.count
            }
        case listActionTypes.SetPageUsers:
            return {
                ...state,
                currentPage: action.page
            }
        case listActionTypes.Fetching:
            return {
                ...state,
                isFetching: action.flag
            }
        case listActionTypes.disableInProgressFollow:
            return {
                ...state,
                isFetching: action.flag,
                disableButton: action.flag 
                ? [...state.disableButton, action.buttonId] 
                : [state.disableButton.filter(id=> id!==action.buttonId)] 
            }
        default:
            return state
    }
}

export const FollowActionCreator = (userId: number): FollowActionCreatorType=>{
    return{
        type:listActionTypes.Follow,
        userId
    }
}
export const UnFollowActionCreator = (userId:number):UnFollowActionCreatorType=> {
    return {
        type: listActionTypes.UnFollow,
        userId
    }
}
export const setUsersActionCreator = (users: any[],count: number):setUsersActionCreatorType=>{
    return{
        type: listActionTypes.setUser,
        users,
        count
    }
}
export const pageUsersActionCreator = (page: number):pageUsersActionCreatorType=>{
    return{
        type: listActionTypes.SetPageUsers,
        page
    }
}
export const toggleIsFetchingActionCreator = (flag: boolean):toggleIsFetchingActionCreatorType=>{
    return{
        type: listActionTypes.Fetching,
        flag
    }
}
export const toggleIsGetDataFollowsActionCreator = (buttonId:number,flag: boolean):toggleIsGetDataFollowsActionCreatorType=>{
    return{
        type: listActionTypes.disableInProgressFollow,
        buttonId,
        flag
    }
}
// thunkCreator
export const getUsersThunkCreator = (CurrentPage: number, pageSize: number)=>{
    return async (dispatch:any)=>{
       try{
            dispatch(toggleIsFetchingActionCreator(true))
            const data = await userAPI.getUsers(CurrentPage, pageSize)
            dispatch(setUsersActionCreator(data.items,data.totalCount))
            dispatch(toggleIsFetchingActionCreator(false))
       }
       catch(error){
           console.log(error)
       }
    }
}

export const UnfollowThunkCreator = (id: number)=>{
    return async (dispatch:any)=>{
        try{
            dispatch(toggleIsGetDataFollowsActionCreator(id,true))
            const data = await userAPI.unFollow(id)
            if (data.resultCode === 0){
                dispatch(UnFollowActionCreator(id))
                dispatch(toggleIsGetDataFollowsActionCreator(id,false))
            }
        }
        catch(error){
           console.log(error)
        }
    }
}
export const followThunkCreator = (id: number)=>{
    return async (dispatch:any)=>{
        try{
            dispatch(toggleIsGetDataFollowsActionCreator(id,true))
            const data = await userAPI.follow(id)
                if (data.resultCode === 0) {
                    dispatch(FollowActionCreator(id))
                    dispatch(toggleIsGetDataFollowsActionCreator(id,false))
                }
        }
        catch(error){
            console.log(error)
        }
    }
}
export default usersReducer